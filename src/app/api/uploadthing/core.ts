import { createUploadthing, type FileRouter } from "uploadthing/next"
import { UploadThingError } from "uploadthing/server"

import { ratelimit } from "@/lib/rate-limit"

const f = createUploadthing()

async function auth(_req: Request) {
  await new Promise((resolve) => setTimeout(resolve, 100))
  return { id: "fakeId" }
}

// FileRouter for your app
export const ourFileRouter = {
  // Define a route for multiple file types
  fileUploader: f({
    image: { maxFileSize: "4MB", maxFileCount: 5 },
    video: { maxFileSize: "16MB", maxFileCount: 2 },
  })
    .middleware(async ({ req }) => {
      // Rate limit the upload
      const ip = req.headers.get("x-forwarded-for") ?? "127.0.0.1"
      const { success } = await ratelimit.limit(ip)

      if (!success) {
        throw new UploadThingError("Rate limit exceeded")
      }

      // Fake authentication
      const user = await auth(req)
      if (!user) throw new UploadThingError("Unauthorized")

      // Pass metadata to `onUploadComplete`
      return { userId: user.id }
    })
    .onUploadComplete(async ({ metadata, file }) => {
      // Logic after upload completes
      console.log("Upload complete for userId:", metadata.userId)
      console.log("File URL:", file.url)
    }),
} satisfies FileRouter

export type OurFileRouter = typeof ourFileRouter