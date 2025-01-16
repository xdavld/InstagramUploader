import React, { useRef, useState } from "react"
import { FaTimes } from "react-icons/fa" // Importing the '×' icon

import { Skeleton } from "@/components/ui/skeleton"

type Media = { type: "image" | "video"; src: string } | null

export const DragDropGrid: React.FC = () => {
  const [mediaItems, setMediaItems] = useState<Media[]>(Array(9).fill(null))

  // Refs for each file input
  const fileInputRefs = useRef<(HTMLInputElement | null)[]>([])

  // Function to handle file processing
  const processFile = (file: File, index: number) => {
    const reader = new FileReader()
    reader.onload = () => {
      const newMediaItems = [...mediaItems]
      if (file.type.startsWith("image/")) {
        newMediaItems[index] = { type: "image", src: reader.result as string }
      } else if (file.type.startsWith("video/")) {
        newMediaItems[index] = { type: "video", src: reader.result as string }
      }
      setMediaItems(newMediaItems)
      // Reset the file input value to allow re-uploading the same file
      if (fileInputRefs.current[index]) {
        fileInputRefs.current[index]!.value = ""
      }
    }
    reader.readAsDataURL(file)
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    e.preventDefault()

    const file = e.dataTransfer.files[0]
    if (file) {
      processFile(file, index)
    }
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  const handleClick = (index: number) => {
    // Trigger the corresponding file input click
    fileInputRefs.current[index]?.click()
  }

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const file = e.target.files?.[0]
    if (file) {
      processFile(file, index)
      // Reset the file input value to allow re-uploading the same file
      e.target.value = ""
    }
  }

  // Function to remove media from a specific grid item
  const handleRemove = (index: number) => {
    const newMediaItems = [...mediaItems]
    newMediaItems[index] = null
    setMediaItems(newMediaItems)
    // Reset the file input value to allow re-uploading
    if (fileInputRefs.current[index]) {
      fileInputRefs.current[index]!.value = ""
    }
  }

  return (
    <div className="mb-5 grid grid-cols-3 gap-1">
      {mediaItems.map((media, index) => (
        <div key={index} className="relative">
          <Skeleton
            onDrop={(e) => handleDrop(e, index)}
            onDragOver={handleDragOver}
            onClick={() => handleClick(index)}
            className="flex aspect-square cursor-pointer items-center justify-center bg-gray-100 dark:bg-gray-800"
          >
            {media ? (
              <>
                {media.type === "image" ? (
                  <img
                    src={media.src}
                    alt={`Uploaded in square ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <video
                    src={media.src}
                    controls
                    className="h-full w-full object-cover"
                  />
                )}
                {/* Remove Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation() // Prevent triggering the onClick of the Skeleton
                    handleRemove(index)
                  }}
                  className="absolute left-0 top-0 flex h-5 w-5 items-center justify-center rounded-full bg-gray-600 text-white hover:bg-red-700 focus:outline-none"
                  aria-label="Remove media"
                >
                  <FaTimes size={10} />
                </button>
              </>
            ) : (
              <span className="px-2 text-center text-xs text-gray-500">
                Drop Image or Video Here
                <br />
                or Click to Upload
              </span>
            )}
          </Skeleton>
          {/* Hidden file input */}
          <input
            type="file"
            accept="image/*,video/*"
            className="hidden"
            ref={(el) => (fileInputRefs.current[index] = el)}
            onChange={(e) => handleFileChange(e, index)}
          />
        </div>
      ))}
    </div>
  )
}
