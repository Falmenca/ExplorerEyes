// app/api/weather/route.ts
// Weather API Documentation:
// https://weather-gov.github.io/api/general-faqs
// https://www.weather.gov/documentation/services-web-api 

export const runtime = "nodejs";

const BASE_URL = "https://api.weather.gov";

// Base coordinates set for UNLV
const unlvLat = "36.1699";
const unlvLon = "-115.1398";

let msg = "";

let grid = {
  id: "",
  x: "",
  y: "",
}

let forecast = {
  city: "",
  state: "",
  name: "",
  temp: "",
  tempUnit: "",
  windSpeed: "",
  windDirection: "",
  precipitation: "", // In percent 
}

export async function POST(req: Request) {
  // Fetch weather data from the API
  /*
    API Endpoint: https://api.weather.gov/points/{latitude},{longitude}

    This will provide the grid forecast endpoints for three format options in these properties:
      forecast - forecast for 12h periods over the next seven days
      forecastHourly - forecast for hourly periods over the next seven days
      forecastGridData - raw forecast data over the next seven days
  */

  // Tries to use provided lat/lon first
  const body = await req.json();
  msg = "";
  
  let gridData = await fetch(`${BASE_URL}/points/${body.latitude},${body.longitude}`, {
    method: 'GET',
    headers: {
      'User-Agent': 'explorer-eyes/1.0 (https://github.com/Falmenca/explorer-eyes)',
      'Properties': 'gridId,gridX,gridY',
    }
  });

  if(gridData.ok){
    console.log("\n");
    console.log(`Successfully fetched grid data for coordinates: ${body.latitude}, ${body.longitude}`);
    msg = `Successfully fetched grid data for coordinates: ${body.latitude}, ${body.longitude}`;
  } else { // Fallback to UNLV coordinates
    if(body.latitude != "" && body.longitude != "") {
      console.log("\n");
      console.error(`Error fetching grid data for coordinates: ${body.latitude}, ${body.longitude}. Defaulting to UNLV coordinates.`);
      msg = `Error fetching grid data for coordinates: ${body.latitude}, ${body.longitude}. Defaulting to UNLV coordinates.`;
    }

    gridData = await fetch(`${BASE_URL}/points/${unlvLat},${unlvLon}`, {
      method: 'GET',
      headers: {
        'User-Agent': 'explorer-eyes/1.0 (https://github.com/Falmenca/explorer-eyes)',
        'Properties': 'gridId,gridX,gridY',
      }
    });
  }
  const gridDataJson = await gridData.json();
  
  // Extract grid information
  for(const d in gridDataJson.properties){
    if(d==="gridId") grid.id = gridDataJson.properties[d];
    if(d==="gridX") grid.x = gridDataJson.properties[d];
    if(d==="gridY") grid.y = gridDataJson.properties[d];
    if(d==="relativeLocation") forecast.city = gridDataJson.properties[d].properties["city"];
    if(d==="relativeLocation") forecast.state = gridDataJson.properties[d].properties["state"];
  }

  /*
    Forecasts are created at each NWS Weather Forecast Office (WFO) on their own grid definition, 
    at a resolution of about 2.5km x 2.5km. The API endpoint for the 12h forecast periods at a 
    specific grid location is formatted as:

      https://api.weather.gov/gridpoints/{office}/{gridX},{gridY}/forecast
  */

  const forecastData = await fetch(`${BASE_URL}/gridpoints/${grid.id}/${grid.x},${grid.y}/forecast`, {
    method: 'GET',
    headers: {
      'User-Agent': 'explorer-eyes/1.0 (https://github.com/Falmenca/explorer-eyes)',
    }
  });

  if (!forecastData.ok) {
    return Response.json({
      ok: false,
      message: "Failed to fetch forecast data from grid endpoints.",
    });
  }
  const forecastDataJson = await forecastData.json();

  for(const d in forecastDataJson.properties.periods[0]){
    if(d==="name") forecast.name = forecastDataJson.properties.periods[0][d];
    if(d==="temperature") forecast.temp = forecastDataJson.properties.periods[0][d];
    if(d==="temperatureUnit") forecast.tempUnit = forecastDataJson.properties.periods[0][d];
    if(d==="windSpeed") forecast.windSpeed = forecastDataJson.properties.periods[0][d];
    if(d==="windDirection") forecast.windDirection = forecastDataJson.properties.periods[0][d];
    if(d==="probabilityOfPrecipitation") forecast.precipitation = forecastDataJson.properties.periods[0][d].value;
  }

  const gridInfo = `Grid Info - ID: ${grid.id}, X: ${grid.x}, Y: ${grid.y}`;
  const locationInfo = `Location Info - City: ${forecast.city}, State: ${forecast.state}`;
  const forecastSummary = `${forecast.name} - Temp: ${forecast.temp}${forecast.tempUnit}, Wind Speed: ${forecast.windSpeed}, Wind Direction: ${forecast.windDirection}, Precipitation Chance: ${forecast.precipitation}%`
  console.log("\n--- Weather Forecast Summary ---");
  console.log(gridInfo);
  console.log(locationInfo);
  console.log(forecastSummary);
  console.log("--------------------------------\n");

  /*
    Response
  */

  return Response.json({
    ok: true,
    data: forecastDataJson,
    location: `${forecast.city ? forecast.city : "Unknown"}, ${forecast.state ? forecast.state : "Unknown"}`,
    summary: `${forecast.name} - Temp: ${forecast.temp}${forecast.tempUnit}`,
    wind: `Wind Speed: ${forecast.windSpeed}, Wind Direction: ${forecast.windDirection}`,
    precipitation: `Precipitation Chance: ${forecast.precipitation}%`,
    message: msg,
    now: new Date().toISOString(),
  });
}
