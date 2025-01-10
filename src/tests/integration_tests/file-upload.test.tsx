;
// src/tests/unit/instagramPublish.test.tsx

import { publishToInstagram } from "@/components/uploader/instagramPublish";

jest.mock("@/components/uploader/instagramPublish", () => ({
  publishToInstagram: jest.fn(),
}))

describe("publishToInstagram Mock", () => {
  it("should be called with correct parameters", async () => {
    ;(publishToInstagram as jest.Mock).mockResolvedValue({
      message: "File published successfully!",
    })

    const payload = {
      imageUrl: "http://example.com/file1",
      caption: "Test Caption",
    }

    const response = await publishToInstagram(payload)

    expect(publishToInstagram).toHaveBeenCalledWith(payload)
    expect(response.message).toBe("File published successfully!")
  })

  it("should handle API failure", async () => {
    ;(publishToInstagram as jest.Mock).mockRejectedValue({
      message: "Failed to publish file.",
    })

    const payload = {
      imageUrl: "http://example.com/file1",
      caption: "Test Caption",
    }

    await expect(publishToInstagram(payload)).rejects.toEqual({
      message: "Failed to publish file.",
    })

    expect(publishToInstagram).toHaveBeenCalledWith(payload)
  })
})