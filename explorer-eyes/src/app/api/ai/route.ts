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

    let er = error as unknown;
    
    if (error instanceof Error) {
      er = error.message;
    } else if (typeof error === 'string') {
      er = error.toString();
    } else {
      console.error('An unknown error occurred.');
    }

    return Response.json({
      ok: false,
      error: er,
      message: "Error communicating with OpenAI API",
      now: new Date().toISOString(),
    });
  }

}