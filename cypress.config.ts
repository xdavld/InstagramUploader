import { defineConfig } from "cypress";





export default defineConfig({
  e2e: {
    baseUrl: "https://software-engineering-project-eight.vercel.app/", // Replace with your app's URL
    setupNodeEvents(on, config) {
      // Event listeners go here
    },
  },
})