module.exports = {
    testPathIgnorePatterns: ['/node_modules/', '/.vscode/', '/.storybook/'],
    setupFilesAfterEnv: [
    "<rootDir>/src/tests/setupTests.ts"
    ],
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
    },
    moduleNameMapper: {
      "\\.png$": "<rootDir>/__mocks__/fileMock.ts",
    },
    testEnvironment: 'jsdom',
}