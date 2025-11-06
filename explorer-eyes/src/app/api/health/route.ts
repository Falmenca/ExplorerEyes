// app/api/weather/route.ts
// Weather API Documentation:
// https://weather-gov.github.io/api/general-faqs
// https://www.weather.gov/documentation/services-web-api 

export const runtime = "nodejs";

const BASE_URL = "https://api.weather.gov";

export async function GET(req: Request) {
  // Simple stub so your page has something to render
  return Response.json({
    ok: true,
    message: "Health API alive",
    now: new Date().toISOString(),
  });
}
