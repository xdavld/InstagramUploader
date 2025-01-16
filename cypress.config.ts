import { defineConfig } from "cypress"
import dotenv from "dotenv"

// Load environment variables from .env file
dotenv.config()

export default defineConfig({
  e2e: {
    baseUrl: "https://software-engineering-project-eight.vercel.app/", // Replace with your app's URL
    setupNodeEvents(on, config) {
      // Assign environment variables to Cypress.env
      config.env.instagramAccessToken = process.env.INSTAGRAM_ACCESS_TOKEN
      config.env.instagramUserId = process.env.INSTAGRAM_USER_ID

      return config
    },
  },
})
