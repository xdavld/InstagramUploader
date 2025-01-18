import { defineConfig } from "cypress";
import dotenv from "dotenv";





// Load environment variables from .env file
dotenv.config()

export default defineConfig({
  e2e: {
    baseUrl: "https://software-engineering-project-eight.vercel.app/", // Replace with your app's URL
    setupNodeEvents(on, config) {
      // Use EXACTLY the same key names:
      config.env.INSTAGRAM_ACCESS_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN
      config.env.INSTAGRAM_CLIENT_ID = process.env.INSTAGRAM_CLIENT_ID

      return config
    },
  },
})