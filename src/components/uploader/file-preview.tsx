// src/components/uploader/file-preview.tsx

"use client"

import React from "react"
import Image from "next/image"
import { FileText } from "lucide-react"

interface FilePreviewProps {
  file: File & { preview: string }
}

export function FilePreview({ file }: FilePreviewProps) {
  if (file.type.startsWith("image/")) {
    return (
      <Image
        src={file.preview}
        alt={file.name}
        width={48}
        height={48}
        loading="lazy"
        className="aspect-square shrink-0 rounded-md object-cover"
      />
    )
  }

  if (file.type.startsWith("video/")) {
    return (
      <video
        src={file.preview}
        width={48}
        height={48}
        controls
        className="aspect-square shrink-0 rounded-md object-cover"
      />
    )
  }

  return (
    <FileText className="size-10 text-muted-foreground" aria-hidden="true" />
  )
}
