// src/setupTests.ts

import { server } from "./mocks/server"

import "@testing-library/jest-dom"

// Establish API mocking before all tests.
beforeAll(() => server.listen())

// Reset any request handlers that are declared as a part of our tests
// (i.e., for testing one-time error scenarios).
afterEach(() => server.resetHandlers())

// Clean up after the tests are finished.
afterAll(() => server.close())
