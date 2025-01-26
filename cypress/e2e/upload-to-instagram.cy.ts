


import "cypress-iframe";





describe("Upload to Instagram", () => {
  beforeEach(() => {

    // Set authentication cookies using environment variables
    cy.setCookie(
      "instagram_access_token",
      Cypress.env("INSTAGRAM_ACCESS_TOKEN")
    )

    cy.setCookie("instagram_user_id", Cypress.env("INSTAGRAM_CLIENT_ID"))

    cy.visit("/uploader")
  })

  it("should allow uploading a file and publishing to Instagram", () => {
    // Upload a valid image file
    const imageFile = "example-image.jpg" // Ensure this file exists in `cypress/fixtures`
    cy.get('input[type="file"]').selectFile(`cypress/fixtures/${imageFile}`, {
      force: true,
    })

    cy.get("button").contains("Save & Upload").click()

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
    cy.get("textarea").type("#TestHashtag Caption")

    // Click the "Publish to Instagram" button
    cy.get("button").contains("Publish to Instagram").click()

    cy.wait(360)
  })

  it("should show an error if the upload fails", () => {
    // Mock a failure response from the API
    cy.intercept("POST", "/api/instagram/upload", {
      statusCode: 500,
      body: { error: "Failed to publish file" },
    }).as("publishToInstagramFailed")

    // Upload a valid image file
    const imageFile = "example-image.jpg" // Ensure this file exists in `cypress/fixtures`
    cy.get('input[type="file"]').selectFile(`cypress/fixtures/${imageFile}`, {
      force: true,
    })

    cy.get("button").contains("Save & Upload").click()

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
    cy.get("textarea").type("#ErrorTest Caption")

    // Click the "Publish to Instagram" button
    cy.get("button").contains("Publish to Instagram").click()

    // Wait for the mocked error API call to complete
    cy.wait("@publishToInstagramFailed")
      .its("response.statusCode")
      .should("eq", 500)
  })
})