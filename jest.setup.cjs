// Use CommonJS `require` instead of `import`
const { TextEncoder, TextDecoder } = require("util")
require("@testing-library/jest-dom")

// Mock URL.createObjectURL
global.URL.createObjectURL = jest.fn(() => "mocked-url")

// Optional: Mock other browser APIs, if used
global.FileReader = class {
  readAsDataURL = jest.fn()
  onload = jest.fn()
  onerror = jest.fn()
}

// Set up TextEncoder and TextDecoder
global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder

// Mock fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ message: "File published successfully!" }),
  })
)

// Optional: Add node-fetch if needed
const fetch = require("node-fetch")
global.fetch = fetch

const originalError = console.error

console.error = (...args) => {
  if (args[0]?.includes("act(...)")) {
    return
  }
  originalError(...args)
}
