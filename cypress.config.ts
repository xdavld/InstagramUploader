import { defineConfig } from "cypress"

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000", // Replace with your app's URL
    setupNodeEvents(on, config) {
      // Event listeners go here
    },
  },
})
