module.exports = {
    automock: false,
    clearMocks: true,
    reporters: [
        "default"
    ],
    collectCoverage: true,
    coverageDirectory: "./unit-test/coverage",
    coveragePathIgnorePatterns: [
        "/node_modules/"
    ],
    coverageProvider: "babel",
    coverageReporters: [
        "json",
        "text",
        "lcov",
        "clover",
        "html",
        "cobertura"
    ],
    moduleDirectories: [
        "node_modules",
        "./unit-test/"
    ],
    moduleFileExtensions: [
        "js",
        "json",
        "node"
    ],
    roots: [
        "<rootDir>",
        "./unit-test/"
    ],
    testEnvironment: "node",
    testLocationInResults: true,
    testMatch: [
        "**/tests/**/*.[jt]s?(x)",
        "**/?(*.)+(spec|test).[tj]s?(x)"
    ],
    testResultsProcessor: "jest-junit",
    transform: {
        '^.+\\.(js|jsx)?$': 'babel-jest'
    },
    transformIgnorePatterns: [
        "/node_modules/",
        "\\.pnp\\.[^\\/]+$"
    ],
    verbose: true,
};