// app/api/health/route.ts
export const runtime = "nodejs";

export async function GET(req: Request) {
  // Simple stub so your page has something to render
  return Response.json({
    ok: true,
    message: "Health API alive",
    now: new Date().toISOString(),
  });
}