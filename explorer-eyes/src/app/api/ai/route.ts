// app/api/ai/route.ts
import OpenAI from "openai";
export const runtime = "nodejs";

export async function GET(req: Request) {

  try {
    const client = new OpenAI();
    const response = await client.responses.create({
      model: "gpt-5",
      input: "Write a one-sentence bedtime story about a unicorn."
    });

    console.log(response.output_text);

    return Response.json({
      ok: true,
      message: "AI API alive",
      now: new Date().toISOString(),
    });

  } catch (error) {
    return Response.json({
      ok: false,
      error: error.message,
      message: "Error communicating with OpenAI API",
    });
  }

}