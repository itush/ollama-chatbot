import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    // Send request to Ollama running locally
    const response = await axios.post("http://127.0.0.1:11434/api/generate", {
      model: "mistral",
      prompt: message,
      stream: false,
    });


    console.log("Full Ollama Response:", response.data.response);
    
    return NextResponse.json({ reply: response.data.response });
  } catch (error) {
    console.error("Error fetching response from Ollama:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
