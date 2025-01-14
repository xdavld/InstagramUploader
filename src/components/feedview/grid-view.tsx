import React, { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { DragDropGrid } from "@/components/feedview/drag-drop-grid"
import { LoadingSpinner } from "@/components/loading-spinner"

interface InstaCloneProps {
  profile: {
    username: string
    profilePictureUrl: string
    followersCount: number
    followsCount: number
    mediaCount: number
  }
  posts: { type: string; src: string }[]
  setPosts: React.Dispatch<
    React.SetStateAction<{ type: string; src: string }[]>
  >
}

export default function InstaClone({
  profile,
  posts,
  setPosts,
}: InstaCloneProps) {
  const [isLoading, setIsLoading] = useState(false)

  const fetchMedia = async () => {
    try {
      setIsLoading(true)
      const response = await fetch("/api/instagram/fetchMedia")
      if (!response.ok) {
        throw new Error("Failed to fetch media data")
      }
      const data = await response.json()
      const transformedPosts = data.map((media: any) => ({
        type: media.media_type.toLowerCase(),
        src: media.media_url,
      }))
      setPosts(transformedPosts)
    } catch (error) {
      console.error("Failed to fetch media:", error.message)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchMedia() // Automatically fetch media when the component is rendered
  }, [])

  return (
    <div className="insta-clone flex min-h-screen flex-col items-center">
      {/* Profile Header */}
      <div className="px-4 py-6 md:px-48">
        <div className="flex flex-col items-center md:flex-row md:items-start md:space-x-6">
          {/* Profile Picture */}
          <div className="h-24 w-24 flex-shrink-0 md:h-40 md:w-40">
            <img
              className="h-full w-full rounded-full object-cover"
              src={profile.profilePictureUrl}
              alt="Profile"
            />
          </div>

          {/* Profile Details */}
          <div className="mt-6 flex-grow text-center md:mt-0 md:text-left">
            <div className="flex items-center justify-center space-x-4 md:justify-start">
              <span className="text-2xl">{profile.username}</span>
              <Button variant="outline">Edit Profile</Button>
              <Button variant="outline">Archive</Button>
            </div>

            <div className="mt-4 flex justify-center space-x-6 md:justify-start">
              <div>
                <Label>{profile.mediaCount}</Label> <Label>Posts</Label>
              </div>
              <div>
                <Label>{profile.followersCount}</Label> <Label>Followers</Label>
              </div>
              <div>
                <Label>{profile.followsCount}</Label> <Label>Following</Label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Separator line */}
      <div className="mx-auto w-full max-w-3xl px-4 py-6">
          <div className="relative text-center text-sm after:content-[''] after:absolute after:inset-0 after:top-1/2 after:z-0 after:h-[1px] after:bg-border">
          </div>
      </div>

      {/* Spinner or Post Grid */}
      <div className="mx-auto w-full max-w-3xl px-4">
        {isLoading ? (
          <div className="flex justify-center">
            <LoadingSpinner />
          </div>
        ) : (
          <>
            {/* Drag & Drop grids */}
            <DragDropGrid />

            {/* Separator line with "Past uploads" */}
            <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:h-[1px] after:bg-border">
              <span className="relative z-10 bg-background px-2 text-muted-foreground">
                Past uploads
              </span>
            </div>

            {/* Grid of posts */}
            <div className="mt-6 grid grid-cols-3 gap-1">
              {posts.map((post, index) => (
                <div key={index} className="aspect-square">
                  {post.type === "image" ? (
                    <img
                      className="h-full w-full object-cover"
                      src={post.src}
                      alt={`Post ${index + 1}`}
                    />
                  ) : (
                    <video
                      className="h-full w-full object-cover"
                      src={post.src}
                      controls
                      loop
                      muted
                    />
                  )}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
