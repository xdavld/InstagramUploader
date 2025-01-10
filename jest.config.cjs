module.exports = {
  verbose: true,
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^@/env$": "<rootDir>/__mocks__/env.js", // Specific mock rule for env.js
    "^@/(.*)$": "<rootDir>/src/$1", // General alias rule
    "\\.(css|less|scss|sass)$": "identity-obj-proxy", // Mock for style files
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/__mocks__/fileMock.js", // Mock for asset files
  },
  setupFiles: ["<rootDir>/jest.setupMocks.cjs"], // Global mocks before all tests
  setupFilesAfterEnv: ["<rootDir>/jest.setup.cjs"], // Additional setup steps after environment initialization
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": ["ts-jest", { tsconfig: "tsconfig.jest.json" }], // Include both TypeScript and JSX/JS
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
}
