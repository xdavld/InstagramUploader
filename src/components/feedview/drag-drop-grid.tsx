import React, { useState } from "react"

import { Skeleton } from "@/components/ui/skeleton"

type Media = { type: "image" | "video"; src: string } | null

export const DragDropGrid: React.FC = () => {
  const [mediaItems, setMediaItems] = useState<Media[]>(Array(9).fill(null))

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    e.preventDefault()

    const file = e.dataTransfer.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        const newMediaItems = [...mediaItems]
        if (file.type.startsWith("image/")) {
          newMediaItems[index] = { type: "image", src: reader.result as string }
        } else if (file.type.startsWith("video/")) {
          newMediaItems[index] = { type: "video", src: reader.result as string }
        }
        setMediaItems(newMediaItems)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  return (
    <div className="mb-5 grid grid-cols-3 gap-1">
      {mediaItems.map((media, index) => (
        <Skeleton
          key={index}
          onDrop={(e) => handleDrop(e, index)}
          onDragOver={handleDragOver}
          className="flex aspect-square items-center justify-center bg-gray-100 dark:bg-gray-800"
        >
          {media ? (
            media.type === "image" ? (
              <img
                src={media.src}
                alt={`Dropped in square ${index + 1}`}
                className="h-full w-full object-cover"
              />
            ) : (
              <video
                src={media.src}
                controls
                className="h-full w-full object-cover"
              />
            )
          ) : (
            <span className="px-2 text-center text-xm">
              Drop Image or Video Here
            </span>
          )}
        </Skeleton>
      ))}
    </div>
  )
}
