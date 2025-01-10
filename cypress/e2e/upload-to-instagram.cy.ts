describe("Upload to Instagram", () => {
  beforeEach(() => {
    // Visit the page where the uploader is located
    cy.visit("/")
  })

  it("should allow uploading a file and publishing to Instagram", () => {
    // Upload a valid image file
    const imageFile = "example-image.jpg" // Place a valid file in `cypress/fixtures`
    cy.get('input[type="file"]').selectFile(`cypress/fixtures/${imageFile}`, {
      force: true,
    })

    // Wait for the progress bar or spinner to disappear
    cy.get('[data-testid="progress-bar"]').should("not.exist")

    // Match the uploaded file dynamically and click to select it
    cy.get('[data-testid^="uploaded-file-"]', { timeout: 10000 })
      .should("exist")
      .first()
      .click()

    // Verify that the file preview is marked as "Selected"
    cy.get('[data-testid^="uploaded-file-"]')
      .first()
      .find(".absolute")
      .should("contain", "Selected")

    // Enter a caption with a hashtag
    cy.get('[data-testid="caption-input"]').type("#TestHashtag Caption")

    // Click the "Publish to Instagram" button
    cy.get('[data-testid="publish-button"]').click()

    // Explicitly wait for the success message to appear
    cy.contains("p", "File published successfully!", { timeout: 15000 }).should(
      "be.visible"
    )
  })

  it("should show an error if the upload fails", () => {
    // Mock a failure response from the API
    cy.intercept("POST", "/api/instagram", {
      statusCode: 400,
      body: { error: "Failed to publish file" },
    }).as("publishToInstagramFail")

    // Upload a valid image file
    const imageFile = "example-image.jpg" // Place a valid file in `cypress/fixtures`
    cy.get('input[type="file"]').selectFile(`cypress/fixtures/${imageFile}`, {
      force: true,
    })

    // Wait for the progress bar or spinner to disappear
    cy.get('[data-testid="progress-bar"]').should("not.exist")

    // Match the uploaded file dynamically and click to select it
    cy.get('[data-testid^="uploaded-file-"]', { timeout: 10000 })
      .should("exist")
      .first()
      .click()

    // Verify that the file preview is marked as "Selected"
    cy.get('[data-testid^="uploaded-file-"]')
      .first()
      .find(".absolute")
      .should("contain", "Selected")

    // Enter a caption with a hashtag
    cy.get('[data-testid="caption-input"]').type("#ErrorTest Caption")

    // Click the "Publish to Instagram" button
    cy.get('[data-testid="publish-button"]').click()

    // Wait for the mocked API call to complete
    cy.wait("@publishToInstagramFail")
      .its("response.statusCode")
      .should("eq", 400)

    // Explicitly wait for the error message to appear
    cy.contains("p", "Failed to publish file", { timeout: 15000 }).should(
      "be.visible"
    )
  })
})
