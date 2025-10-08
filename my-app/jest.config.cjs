module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/test/setupTests.js"],
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest"
  },
  moduleNameMapper: {
    "^components/(.*)$": "<rootDir>/src/components/$1",
    "^styles/(.*)$": "<rootDir>/src/styles/$1",
    "\\.(css|scss|sass|less)$": "<rootDir>/__mocks__/styleMock.js"
  }
};
