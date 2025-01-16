"use client";

import * as React from "react";
import { Upload, X } from "lucide-react";
import Dropzone, { type DropzoneProps, type FileRejection } from "react-dropzone";
import Cropper from "react-easy-crop";
import { toast } from "sonner";



import { cn, formatBytes } from "@/lib/utils";
import { useControllableState } from "@/hooks/use-controllable-state";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Slider } from "@/components/ui/slider";
import { FilePreview } from "@/components/uploader/file-preview";





// Memoized FileCard Component to prevent unnecessary re-renders
interface FileCardProps {
  file: File
  onRemove: () => void
  progress?: number
}

const FileCard = React.memo(function FileCard({
  file,
  progress,
  onRemove,
}: FileCardProps) {
  return (
    <div className="relative flex items-center gap-2.5">
      <div className="flex flex-1 gap-2.5">
        {isFileWithPreview(file) ? <FilePreview file={file} /> : null}
        <div className="flex w-full flex-col gap-2">
          <div className="flex flex-col gap-px">
            <p className="line-clamp-1 text-sm font-medium text-foreground/80">
              {file.name}
            </p>
            <p className="text-xs text-muted-foreground">
              {formatBytes(file.size)}
            </p>
          </div>
          {progress !== undefined && <Progress value={progress} />}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="size-7"
          onClick={onRemove}
        >
          <X className="size-4" aria-hidden="true" />
          <span className="sr-only">Remove file</span>
        </Button>
      </div>
    </div>
  )
})

// Utility to check if file has a preview
function isFileWithPreview(file: File): file is File & { preview: string } {
  return "preview" in file && typeof file.preview === "string"
}

interface FileUploaderProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: File[]
  onValueChange?: (files: File[]) => void
  onUpload?: (files: File[]) => Promise<void>
  progresses?: Record<string, number>
  accept?: DropzoneProps["accept"]
  maxSize?: DropzoneProps["maxSize"]
  maxFileCount?: DropzoneProps["maxFiles"]
  multiple?: boolean
  disabled?: boolean
}

export function FileUploader(props: FileUploaderProps) {
  const {
    value: valueProp,
    onValueChange,
    onUpload,
    progresses,
    accept = {
      "image/jpeg": [".jpg", ".jpeg"],
      "image/png": [".png"],
      "image/gif": [".gif"],
      "video/mp4": [".mp4"],
      "video/x-matroska": [".mkv"],
      "video/x-msvideo": [".avi"],
    },
    maxSize = 1024 * 1024 * 8, // 8MB
    maxFileCount = 4, // Increased for better testing with multiple files
    multiple = true, // Allow multiple uploads
    disabled = false,
    className,
    ...dropzoneProps
  } = props

  const [files, setFiles] = useControllableState({
    prop: valueProp,
    onChange: onValueChange,
  })

  // States for Cropping Dialog
  const [isCropDialogOpen, setIsCropDialogOpen] = React.useState(false)
  const [imagesToCrop, setImagesToCrop] = React.useState<File[]>([])
  const [currentCropIndex, setCurrentCropIndex] = React.useState(0)
  const [crop, setCrop] = React.useState({ x: 0, y: 0 })
  const [zoom, setZoom] = React.useState(1)
  const [rotation, setRotation] = React.useState(0)
  const [croppedAreas, setCroppedAreas] = React.useState<Record<number, any>>(
    {}
  )
  const [aspect, setAspect] = React.useState<number | undefined>(1 / 1) // Allow undefined for free aspect ratio

// Memoized onDrop handler to prevent re-creation on every render
const onDrop = React.useCallback(
  (acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
    const totalFiles = (files?.length ?? 0) + acceptedFiles.length;

    if (totalFiles > maxFileCount) {
      toast.error(`Cannot upload more than ${maxFileCount} files`);
      return;
    }

    // Create preview URLs for image files
    const newFiles = acceptedFiles.map((file) => {
      if (file.type.startsWith("image/")) {
        return Object.assign(file, {
          preview: URL.createObjectURL(file),
        });
      }
      return file;
    });

    const updatedFiles = files ? [...files, ...newFiles] : newFiles;
    setFiles(updatedFiles);

    // Handle rejected files
    if (rejectedFiles.length > 0) {
      rejectedFiles.forEach(({ file, errors }) => {
        errors.forEach((error) => {
          if (error.code === "file-too-large") {
            toast.error(`File ${file.name} exceeds the size limit of ${formatBytes(maxSize)}`);
          } else if (error.code === "too-many-files") {
            toast.error(`Cannot upload more than ${maxFileCount} files`);
          } else {
            toast.error(`File ${file.name} was rejected: ${error.message}`);
          }
        });
      });
    }

    // **Use `newFiles` here to ensure previews are included**
    const imageFiles = newFiles.filter((file) => file.type.startsWith("image/"));

    if (imageFiles.length > 0) {
      setImagesToCrop(imageFiles);
      setCurrentCropIndex(0);
      setIsCropDialogOpen(true);
    } else {
      // Initiate upload if no images to crop
      if (onUpload) {
        toast.promise(onUpload(updatedFiles), {
          loading: `Uploading ${updatedFiles.length} file(s)...`,
          success: () => {
            setFiles([]);
            return `${updatedFiles.length} file(s) uploaded`;
          },
          error: `Failed to upload ${updatedFiles.length} file(s)`,
        });
      }
    }
  },
  [files, maxFileCount, maxSize, setFiles, onUpload]
);

  // Direct onCropComplete handler without throttling
  const onCropCompleteHandler = React.useCallback(
    (croppedArea: any, croppedAreaPixels: any) => {
      setCroppedAreas((prev) => ({
        ...prev,
        [currentCropIndex]: croppedAreaPixels,
      }))
    },
    [currentCropIndex]
  )

  // Utility function to handle rotation and cropping
  const getCroppedImg = React.useCallback(
    async (file: File, pixelCrop: any, rotation: number): Promise<Blob> => {
      const createImage = (url: string) =>
        new Promise<HTMLImageElement>((resolve, reject) => {
          const image = new Image()
          image.addEventListener("load", () => resolve(image))
          image.addEventListener("error", (error) => reject(error))
          image.setAttribute("crossOrigin", "anonymous") // Needed to avoid cross-origin issues
          image.src = url
        })

      const image = await createImage(URL.createObjectURL(file))
      const canvas = document.createElement("canvas")
      const ctx = canvas.getContext("2d")

      if (!ctx) {
        throw new Error("Cannot get canvas context")
      }

      // Calculate the safe area for the rotation
      const maxSize = Math.max(image.width, image.height)
      const safeArea = 2 * ((maxSize / 2) * Math.sqrt(2))

      // Set canvas size to safe area
      canvas.width = safeArea
      canvas.height = safeArea

      // Translate canvas context to center and rotate
      ctx.translate(safeArea / 2, safeArea / 2)
      ctx.rotate((rotation * Math.PI) / 180)
      ctx.translate(-safeArea / 2, -safeArea / 2)

      // Draw the image
      ctx.drawImage(
        image,
        safeArea / 2 - image.width / 2,
        safeArea / 2 - image.height / 2
      )

      // Get the rotated image data
      const data = ctx.getImageData(0, 0, safeArea, safeArea)

      // Set canvas to desired crop size
      canvas.width = pixelCrop.width
      canvas.height = pixelCrop.height

      // Draw the cropped image
      ctx.putImageData(
        data,
        Math.round(-safeArea / 2 + image.width / 2 - pixelCrop.x),
        Math.round(-safeArea / 2 + image.height / 2 - pixelCrop.y)
      )

      // Convert canvas to blob
      return new Promise((resolve, reject) => {
        canvas.toBlob((blob) => {
          if (!blob) {
            reject(new Error("Canvas is empty"))
            return
          }
          resolve(blob)
        }, file.type)
      })
    },
    []
  )

  // Handler to close the cropping dialog and remove selected images
const handleDialogClose = React.useCallback(() => {
  if (files.length > 0) {
    // Revoke all preview URLs
    files.forEach((file) => {
      if (file.preview) {
        URL.revokeObjectURL(file.preview)
      }
    })
    // Clear all files
    setFiles([])
  }

  // Reset cropping states
  setImagesToCrop([])
  setCurrentCropIndex(0)
  setRotation(0)
  setCrop({ x: 0, y: 0 })
  setZoom(1)
  setCroppedAreas({})

  // Close the cropping dialog
  setIsCropDialogOpen(false)
}, [files, setFiles])

const handleCropSave = React.useCallback(async () => {
  const currentFile = imagesToCrop[currentCropIndex]
  const pixelCrop = croppedAreas[currentCropIndex]

  if (currentFile && pixelCrop) {
    try {
      const croppedImage = await getCroppedImg(currentFile, pixelCrop, rotation)
      const croppedFile = new File([croppedImage], currentFile.name, {
        type: currentFile.type,
      })
      // **Assign a new preview URL**
      const newPreview = URL.createObjectURL(croppedImage)
      Object.assign(croppedFile, {
        preview: newPreview,
      })

      // Revoke old preview URL
      if (currentFile.preview) {
        URL.revokeObjectURL(currentFile.preview)
      }

      // Update 'files' state
      const updatedFiles = files
        ? files.map((file) => (file === currentFile ? croppedFile : file))
        : [croppedFile]
      setFiles(updatedFiles)

      // Update 'imagesToCrop' state
      const updatedImagesToCrop = imagesToCrop.map((file) =>
        file === currentFile ? croppedFile : file
      )
      setImagesToCrop(updatedImagesToCrop)

      toast.success(`Image "${currentFile.name}" cropped successfully`)

      // Move to the next image or upload
      const nextIndex = currentCropIndex + 1
      if (nextIndex < imagesToCrop.length) {
        setCurrentCropIndex(nextIndex)
        setCrop({ x: 0, y: 0 })
        setZoom(1)
        setRotation(0)
      } else {
        // All images cropped, initiate upload
        setIsCropDialogOpen(false)
        setImagesToCrop([])
        setCurrentCropIndex(0)
        setCrop({ x: 0, y: 0 })
        setZoom(1)
        setRotation(0)
        setCroppedAreas({})

        if (onUpload) {
          toast.promise(onUpload(updatedFiles), {
            loading: `Uploading ${updatedFiles.length} file(s)...`,
            success: () => {
              setFiles([])
                if (updatedFiles.length > 4) {
                  return `toast.error("Cannot upload more than ${maxFileCount} files")`
                }
              return `${updatedFiles.length} file(s) uploaded`
            },
            error: `Failed to upload ${updatedFiles.length} file(s)`,
          })
        }
      }
    } catch (e) {
      console.error(e)
      toast.error("Failed to crop the image")
    }
  } else {
    console.error(
      `Cropped area pixels not set for image index ${currentCropIndex}`
    )
    toast.error("Cropping area not set")
  }
}, [
  imagesToCrop,
  currentCropIndex,
  croppedAreas,
  rotation,
  files,
  setFiles,
  onUpload,
  getCroppedImg,
])

  // Memoized onRemove handler to prevent re-creation on every render
  const handleRemove = React.useCallback(
    (index: number) => {
      if (!files) return
      const fileToRemove = files[index]
      const newFiles = files.filter((_, i) => i !== index)
      setFiles(newFiles)
      onValueChange?.(newFiles)

      // If the removed file is in the cropping queue, remove it from there as well
      setImagesToCrop((prev) => prev.filter((file) => file !== fileToRemove))

      // Revoke the preview URL of the removed file
      if (isFileWithPreview(fileToRemove)) {
        URL.revokeObjectURL(fileToRemove.preview)
      }
    },
    [files, setFiles, onValueChange]
  )

  // Revoke preview URLs when component unmounts or files change
  React.useEffect(() => {
    return () => {
      if (!files) return
      files.forEach((file) => {
        if (isFileWithPreview(file)) {
          // Only revoke if the file is not in imagesToCrop
          if (!imagesToCrop.includes(file)) {
            URL.revokeObjectURL(file.preview)
          }
        }
      })
    }
  }, [files, imagesToCrop])

  const isDisabled = disabled || (files?.length ?? 0) >= maxFileCount

  return (
      <div className="relative flex flex-col gap-6 overflow-hidden">
        {/* Dropzone Component */}
        <Dropzone
          onDrop={onDrop}
          accept={accept}
          maxSize={maxSize}
          maxFiles={maxFileCount}
          multiple={maxFileCount > 1 || multiple}
          disabled={isDisabled}
          {...dropzoneProps}
        >
          {({ getRootProps, getInputProps, isDragActive }) => (
            <div
              {...getRootProps()}
              className={cn(
                "group relative grid h-52 w-full cursor-pointer place-items-center rounded-lg border-2 border-dashed border-muted-foreground/25 px-5 py-2.5 text-center transition hover:bg-muted/25",
                "ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                isDragActive && "border-muted-foreground/50",
                isDisabled && "pointer-events-none opacity-60",
                className
              )}
            >
              <input {...getInputProps()} aria-label="Drag 'n' drop files here" />
              {isDragActive ? (
                <div className="flex flex-col items-center justify-center gap-4 sm:px-5">
                  <div className="rounded-full border border-dashed p-3">
                    <Upload
                      className="size-7 text-muted-foreground"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="font-medium text-muted-foreground">
                    Drop the files here
                  </p>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center gap-4 sm:px-5">
                  <div className="rounded-full border border-dashed p-3">
                    <Upload
                      className="size-7 text-muted-foreground"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="flex flex-col gap-px">
                    <p className="font-medium text-muted-foreground">
                      Drag {`'n'`} drop files here, or click to select files
                    </p>
                    <p className="text-sm text-muted-foreground/70">
                      You can upload
                      {maxFileCount > 1
                        ? ` ${
                            maxFileCount === Infinity ? "multiple" : maxFileCount
                          } files (up to ${formatBytes(maxSize)} each)`
                        : ` a file with ${formatBytes(maxSize)}`}
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
        </Dropzone>

        {/* File Previews */}
        {files?.length ? (
          <ScrollArea className="h-fit w-full px-3">
            <div className="flex max-h-48 flex-col gap-4">
              {files.map((file, index) => (
                <FileCard
                  key={`${file.name}-${file.lastModified}-${index}`} // Ensured unique keys
                  file={file}
                  onRemove={() => handleRemove(index)}
                  progress={progresses?.[file.name]}
                />
              ))}
            </div>
          </ScrollArea>
        ) : null}

        {/* Dialog for Cropping */}
        <Dialog
          open={isCropDialogOpen}
          onOpenChange={(open) => {
            if (!open) {
              handleDialogClose()
            } else {
              setIsCropDialogOpen(open)
            }
          }}
        >
          <DialogContent className="sm:max-w-3xl">
            <DialogHeader>
              <DialogTitle>
                Crop Image ({currentCropIndex + 1} of {imagesToCrop.length})
              </DialogTitle>
              <DialogDescription>
                Adjust the cropping area for your image before uploading.
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col gap-4">
              {/* Aspect Ratio Selection Buttons */}
              <div className="flex justify-center gap-2">
                <Button
                  variant={aspect === 1 / 1 ? "primary" : "outline"}
                  onClick={() => setAspect(1 / 1)}
                  aria-label="Select Square Aspect Ratio"
                >
                  Square
                </Button>
                <Button
                  variant={aspect === 3 / 4 ? "primary" : "outline"}
                  onClick={() => setAspect(3 / 4)}
                  aria-label="Select Portrait Aspect Ratio"
                >
                  Portrait
                </Button>
                <Button
                  variant={aspect === 16 / 9 ? "primary" : "outline"}
                  onClick={() => setAspect(16 / 9)}
                  aria-label="Select Landscape Aspect Ratio"
                >
                  Landscape
                </Button>
              </div>

              {/* Cropper Component */}
              <div className="relative h-96 w-full">
                {imagesToCrop.length > 0 && imagesToCrop[currentCropIndex]?.preview ? (
                  <>
                    {console.log(`Rendering Cropper for image: ${imagesToCrop[currentCropIndex].name}`)}
                    <Cropper
                      key={`${currentCropIndex}-${imagesToCrop[currentCropIndex].preview}`} // Unique key
                      image={imagesToCrop[currentCropIndex].preview}
                      crop={crop}
                      zoom={zoom}
                      rotation={rotation}
                      aspect={aspect}
                      onCropChange={setCrop}
                      onZoomChange={setZoom}
                      onRotationChange={setRotation}
                      onCropComplete={onCropCompleteHandler}
                    />
                  </>
                ) : (
                  <p className="text-red-500">Image preview not available.</p>
                )}
              </div>

              {/* Zoom Slider */}
              <div className="flex items-center gap-2">
                <Label htmlFor="zoom" className="text-sm text-muted-foreground">
                  Zoom
                </Label>
                <Slider
                  value={[zoom]} // ShadCN Slider expects an array
                  onValueChange={(val) => setZoom(val[0])} // Update zoom state
                  min={1}
                  max={3}
                  step={0.1}
                  className="w-full"
                />
              </div>

              {/* Rotation Slider */}
              <div className="flex items-center gap-2">
                <Label
                  htmlFor="rotation"
                  className="text-sm text-muted-foreground"
                >
                  Rotation
                </Label>
                <Slider
                  value={[rotation]} // ShadCN Slider expects an array
                  onValueChange={(val) => setRotation(val[0])} // Update rotation state
                  min={0}
                  max={360}
                  step={1}
                  className="w-full"
                />
              </div>

              {/* Dialog Footer with Actions */}
              <DialogFooter className="flex justify-between">
                <Button
                  variant="secondary"
                  onClick={handleDialogClose} // Use the handler here
                >
                  Cancel
                </Button>
                <div className="flex gap-2">
                  {currentCropIndex > 0 && (
                    <Button
                      variant="outline"
                      onClick={() => {
                        setCurrentCropIndex(currentCropIndex - 1)
                        setCrop({ x: 0, y: 0 })
                        setZoom(1)
                        setRotation(0)
                      }}
                    >
                      Previous
                    </Button>
                  )}
                  <Button
                    onClick={handleCropSave}
                    disabled={!croppedAreas[currentCropIndex]} // Disable until cropped area is set
                  >
                    {currentCropIndex + 1 === imagesToCrop.length
                      ? "Save & Upload"
                      : "Save & Next"}
                  </Button>
                </div>
              </DialogFooter>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    )
}