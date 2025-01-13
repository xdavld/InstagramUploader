;
// src/tests/components/uploader/file-uploader.test.tsx

import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { toast } from "sonner";

import { FileUploader } from "@/components/uploader/file-uploader";

// Mock the toast from 'sonner'
jest.mock("sonner", () => ({
  toast: {
    error: jest.fn(),
    promise: jest.fn(),
  },
}))

// Mock utility functions if needed
jest.mock("@/lib/utils", () => ({
  cn: (...classes: string[]) => classes.join(" "),
  formatBytes: (bytes: number) => {
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"]
    if (bytes === 0) return "0 Byte"
    const i = Math.floor(Math.log(bytes) / Math.log(1024))
    return `${parseFloat((bytes / Math.pow(1024, i)).toFixed(2))} ${sizes[i]}`
  },
}))

// Mock FilePreview component
jest.mock("@/components/uploader/file-preview", () => ({
  FilePreview: () => <div data-testid="file-preview">File Preview</div>,
}))

describe("FileUploader Component", () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it("should display an error when uploading a file larger than 16MB", async () => {
    // Render the FileUploader component
    render(<FileUploader />)

    // Create a mock file larger than 16MB (17MB)
    const largeFile = new File(
      [new ArrayBuffer(17 * 1024 * 1024)],
      "large-image.jpg",
      {
        type: "image/jpeg",
      }
    )

    // Find the file input element
    const fileInput = screen.getByLabelText(
      /drag 'n' drop files here/i
    ) as HTMLInputElement

    // Simulate file upload by firing a change event
    fireEvent.change(fileInput, { target: { files: [largeFile] } })

    // Wait for the toast.error to be called with the appropriate message
    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith(
        "File large-image.jpg was rejected"
      )
    })

    // Optionally, assert that the file is not added to the file list
    expect(screen.queryByTestId("file-preview")).not.toBeInTheDocument()
  })

  it("should accept and display a file smaller than or equal to 16MB", async () => {
    // Mock onUpload function
    const mockOnUpload = jest.fn().mockResolvedValueOnce(undefined)

    // Render the FileUploader component with the onUpload prop
    render(<FileUploader onUpload={mockOnUpload} />)

    // Create a mock file of 16MB
    const validFile = new File(
      [new ArrayBuffer(8 * 1024 * 1024)],
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
    fireEvent.change(fileInput, { target: { files: [validFile] } })

    // Wait for the toast.promise to be called
    await waitFor(() => {
      expect(toast.promise).toHaveBeenCalledWith(
        mockOnUpload(validFile),
        expect.any(Object) // Match the toast configuration
      )
    })

    // Assert that the file preview is displayed
    expect(screen.getByTestId("file-preview")).toBeInTheDocument()
  })
})