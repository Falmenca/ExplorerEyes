// app/api/weather/route.ts
// Weather API Documentation:
// https://weather-gov.github.io/api/general-faqs
// https://www.weather.gov/documentation/services-web-api 

import { headers } from "next/headers";

export const runtime = "nodejs";

const BASE_URL = "https://api.weather.gov";

// Base coordinates set for UNLV
const latitude = "36.1699";
const longitude = "-115.1398";

let grid = {
  id: "",
  x: "",
  y: "",
}

let forecast = {
  temp: "",
  tempUnit: "",
  windSpeed: "",
  windDirection: "",
}

export async function GET(req: Request) {

  // Fetch weather data from the API
  /*
    API Endpoint: https://api.weather.gov/points/{latitude},{longitude}

    This will provide the grid forecast endpoints for three format options in these properties:
      forecast - forecast for 12h periods over the next seven days
      forecastHourly - forecast for hourly periods over the next seven days
      forecastGridData - raw forecast data over the next seven days
  */
  const gridData = await fetch(`${BASE_URL}/points/${latitude},${longitude}`, {
    method: 'GET',
    headers: {
      'User-Agent': 'explorer-eyes/1.0 (https://github.com/Falmenca/explorer-eyes)',
      'Properties': 'gridId,gridX,gridY',
    }
  });

  if (!gridData.ok) {
    return Response.json({
      ok: false,
      message: "Failed to fetch grid forecast endpoints from coordinates.",
    });
  }
  const gridDataJson = await gridData.json();

  for(const d in gridDataJson.properties){
    if(d==="gridId") grid.id = gridDataJson.properties[d];
    if(d==="gridX") grid.x = gridDataJson.properties[d];
    if(d==="gridY") grid.y = gridDataJson.properties[d];
  }
  console.log(`Grid Info - ID: ${grid.id}, X: ${grid.x}, Y: ${grid.y}`);

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
    if(d==="temperature") forecast.temp = forecastDataJson.properties.periods[0][d];
    if(d==="temperatureUnit") forecast.tempUnit = forecastDataJson.properties.periods[0][d];
    if(d==="windSpeed") forecast.windSpeed = forecastDataJson.properties.periods[0][d];
    if(d==="windDirection") forecast.windDirection = forecastDataJson.properties.periods[0][d];
  }
  console.log(`Forecast Info - Temp: ${forecast.temp}${forecast.tempUnit}, Wind Speed: ${forecast.windSpeed}, Wind Direction: ${forecast.windDirection}`);

  return Response.json({
    ok: true,
    data: `UNLV Forecast Info - Temp: ${forecast.temp}${forecast.tempUnit}, Wind Speed: ${forecast.windSpeed}, Wind Direction: ${forecast.windDirection}`,
    message: `Grid Info - ID: ${grid.id}, X: ${grid.x}, Y: ${grid.y}`,
    now: new Date().toISOString(),
  });
}
