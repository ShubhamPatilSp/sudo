import { type NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession()

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { text, action } = await req.json()

    if (!text || !action) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    let prompt = ""

    switch (action) {
      case "humanize":
        prompt = `Please rewrite the following text to make it sound more natural and human-like, while maintaining the original meaning and key information. Remove any robotic or AI-generated patterns:

${text}`
        break

      case "detect":
        prompt = `Analyze the following text and determine if it was likely generated by AI. Provide a confidence score (0-100%) and explain your reasoning:

${text}`
        break

      case "generate":
        prompt = `Generate high-quality, original content based on this prompt: ${text}`
        break

      default:
        return NextResponse.json({ error: "Invalid action" }, { status: 400 })
    }

    const { text: result } = await generateText({
      model: openai("gpt-4o"),
      prompt,
      maxTokens: 2000,
    })

    // Here you would typically:
    // 1. Deduct credits from user's account
    // 2. Log the usage
    // 3. Check rate limits

    return NextResponse.json({ result })
  } catch (error) {
    console.error("AI processing error:", error)
    return NextResponse.json({ error: "Failed to process text" }, { status: 500 })
  }
}
