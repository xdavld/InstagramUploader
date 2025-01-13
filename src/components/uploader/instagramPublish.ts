export interface PublishPayload {
  imageUrl?: string
  videoUrl?: string
  caption: string
  mediaType?: "REELS"
  selectedTab?: string
  scheduledTime?: Date
}

export interface PublishResponse {
  message: string
}

export async function publishToInstagram(
  payload: PublishPayload
): Promise<PublishResponse> {
  const response = await fetch("/api/instagram", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.error || "Failed to publish to Instagram")
  }

  return data
}
