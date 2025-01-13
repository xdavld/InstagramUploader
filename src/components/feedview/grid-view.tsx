import React, { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { LoadingSpinner } from "@/components/loading-spinner" // Import the spinner
import { DragDropGrid } from "@/components/feedview/drag-drop-grid" // Import the spinner


interface InstaCloneProps {
  isLoading?: boolean
  profilePicture: string
  username: string
  postsCount: number
  followersCount: number
  followingCount: number
  bio: string
  website: string
  categories: string
  posts: { type: "image" | "video"; src: string }[]
}

// Minimal drag & drop example
export default function InstaClone({
  isLoading,
  profilePicture,
  username,
  postsCount,
  followersCount,
  followingCount,
  bio,
  website,
  categories,
  posts,
}: InstaCloneProps) {

  return (
    <div className="insta-clone flex min-h-screen flex-col items-center">
      {/* Profile Header */}
      <div className="px-4 py-6 md:px-48">
        <div className="flex flex-col items-center md:flex-row md:items-start md:space-x-6">
          {/* Profile Picture */}
          <div className="h-24 w-24 flex-shrink-0 md:h-40 md:w-40">
            <img
              className="h-full w-full rounded-full object-cover"
              src={profilePicture}
              alt="Profile"
            />
          </div>

          {/* Profile Details */}
          <div className="mt-6 flex-grow text-center md:text-left md:mt-0">
            <div className="flex items-center justify-center md:justify-start space-x-4">
              <span className="text-2xl">{username}</span>
              <Button variant="outline">Edit Profile</Button>
              <Button variant="outline">Archive</Button>
            </div>

            <div className="mt-4 flex justify-center md:justify-start space-x-6">
              <div>
                <Label>{postsCount}</Label> <Label>Posts</Label>
              </div>
              <div>
                <Label>{followersCount}</Label> <Label>Followers</Label>
              </div>
              <div>
                <Label>{followingCount}</Label> <Label>Following</Label>
              </div>
            </div>

            <div className="mt-4 text-center md:text-left">
              <Label className="font-bold">{bio}</Label>
              <p>{categories}</p>
              <a
                href={website}
                className="hover:underline block"
                target="_blank"
                rel="noopener noreferrer"
              >
                {website}
              </a>
            </div>
          </div>
        </div>
      </div>


        <div className="mx-auto w-full max-w-6xl px-4 py-6">
            <div className="relative text-center text-sm after:content-[''] after:absolute after:inset-0 after:top-1/2 after:z-0 after:h-[1px] after:bg-border">
            </div>
        </div>

      {/* Spinner or Post Grid */}
      <div className="mx-auto w-full max-w-6xl px-4">
        {isLoading ? (
        <div className="flex justify-center">
            <LoadingSpinner />
        </div>
        ) : (
          <>
            {/* Drag & Drop grids */}
            <DragDropGrid />

            {/* Separator line & Past uploads */}
            <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:h-[1px] after:bg-border">
              <span className="relative z-10 bg-background px-2 text-muted-foreground">
                Past uploads
              </span>
            </div>

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