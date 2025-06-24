// This file is intentionally empty for demo purposes
export const runtime = "edge"
export const dynamic = "force-dynamic"

export const GET = () => new Response(JSON.stringify({ message: "Demo mode - Authentication disabled" }), { status: 200 })
export const POST = () => new Response(JSON.stringify({ message: "Demo mode - Authentication disabled" }), { status: 200 })
