import React from "react" // React for JSX
import { fireEvent, render, screen, waitFor } from "@testing-library/react" // Testing utilities
import { toast } from "sonner" // For mocking toast notifications

import { FileUploader } from "@/components/uploader/file-uploader" // Your component under test

it("should display an error when uploading a file of unsupported type", async () => {
  // Mock the toast function
  jest.spyOn(toast, "error")

  // Render the FileUploader component
  render(<FileUploader />)

  // Create a mock unsupported file (e.g., a `.txt` file)
  const unsupportedFile = new File(
    [new ArrayBuffer(1024)], // 1KB file
    "unsupported-file.txt",
    {
      type: "text/plain",
    }
  )

  // Find the file input element
  const fileInput = screen.getByLabelText(
    /drag 'n' drop files here/i
  ) as HTMLInputElement

  // Simulate file upload by firing a change event
  fireEvent.change(fileInput, { target: { files: [unsupportedFile] } })

  // Wait for the toast.error to be called
  await waitFor(() => {
    expect(toast.error).toHaveBeenCalledWith(
      `File unsupported-file.txt was rejected`
    )
  })

  // Verify no file preview is displayed
  expect(screen.queryByTestId("file-preview")).not.toBeInTheDocument()
})

it("should allow uploading a valid image file", () => {
  // Render the FileUploader component
  render(<FileUploader />)

  // Create a mock image file
  const imageFile = new File(
    [new ArrayBuffer(1024)], // 1KB file
    "valid-image.jpg",
    {
      type: "image/jpeg",
    }
  )

  // Find the file input element
  const fileInput = screen.getByLabelText(
    /drag 'n' drop files here/i
  ) as HTMLInputElement

  // Simulate file upload by firing a change event
  fireEvent.change(fileInput, { target: { files: [imageFile] } })

  // Assert that the file input contains the uploaded file
  expect(fileInput.files?.[0]).toBe(imageFile)
  expect(fileInput.files).toHaveLength(1)
})

it("should allow uploading a valid video file", () => {
  // Render the FileUploader component
  render(<FileUploader />)

  // Create a mock video file
  const videoFile = new File(
    [new ArrayBuffer(1024)], // 1KB file
    "valid-video.mp4",
    {
      type: "video/mp4",
    }
  )

  // Find the file input element
  const fileInput = screen.getByLabelText(
    /drag 'n' drop files here/i
  ) as HTMLInputElement

  // Simulate file upload by firing a change event
  fireEvent.change(fileInput, { target: { files: [videoFile] } })

  // Assert that the file input contains the uploaded file
  expect(fileInput.files?.[0]).toBe(videoFile)
  expect(fileInput.files).toHaveLength(1)
});
