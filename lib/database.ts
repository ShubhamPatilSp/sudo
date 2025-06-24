import { Pool } from "pg"

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : false,
})

export async function query(text: string, params?: any[]) {
  const client = await pool.connect()
  try {
    const result = await client.query(text, params)
    return result
  } finally {
    client.release()
  }
}

export async function getUserCredits(userId: string) {
  const result = await query("SELECT * FROM credits WHERE user_id = $1", [userId])
  return result.rows[0]
}

export async function deductCredits(userId: string, amount = 1) {
  const result = await query(
    `UPDATE credits 
     SET used_credits = used_credits + $2, 
         remaining_credits = remaining_credits - $2,
         updated_at = CURRENT_TIMESTAMP
     WHERE user_id = $1 AND remaining_credits >= $2
     RETURNING *`,
    [userId, amount],
  )
  return result.rows[0]
}

export async function logUsage(
  userId: string,
  actionType: string,
  inputText: string,
  outputText: string,
  creditsUsed = 1,
) {
  const result = await query(
    `INSERT INTO usage_logs (user_id, action_type, input_text, output_text, credits_used)
     VALUES ($1, $2, $3, $4, $5)
     RETURNING *`,
    [userId, actionType, inputText, outputText, creditsUsed],
  )
  return result.rows[0]
}

export async function refillCredits(userId: string, planName: string) {
  const creditAmounts = {
    Free: 10,
    Pro: 100,
    Unlimited: 1000,
  }

  const credits = creditAmounts[planName as keyof typeof creditAmounts] || 10

  const result = await query(
    `UPDATE credits 
     SET total_credits = $2,
         remaining_credits = $2,
         used_credits = 0,
         last_refill = CURRENT_TIMESTAMP,
         updated_at = CURRENT_TIMESTAMP
     WHERE user_id = $1
     RETURNING *`,
    [userId, credits],
  )
  return result.rows[0]
}
