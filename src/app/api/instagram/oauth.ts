import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"])
    return res.status(405).json({ error: `Method ${req.method} not allowed` })
  }

  const { code } = req.body

  if (!code) {
    return res.status(400).json({ error: "Missing code" })
  }

  try {
    const response = await fetch(
      "https://api.instagram.com/oauth/access_token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          client_id: process.env.NEXT_PUBLIC_INSTAGRAM_CLIENT_ID || "",
          client_secret: process.env.INSTAGRAM_CLIENT_SECRET || "",
          grant_type: "authorization_code",
          redirect_uri: process.env.NEXT_PUBLIC_INSTAGRAM_REDIRECT_URI || "",
          code,
        }).toString(),
      }
    )

    if (!response.ok) {
      const errorData = await response.json()
      return res.status(response.status).json({ error: errorData })
    }

    const data = await response.json()
    return res.status(200).json({ access_token: data.access_token })
  } catch (error) {
    console.error("Error exchanging code for access token:", error)
    return res.status(500).json({ error: "Internal server error" })
  }
}
