module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: true,
  collectCoverageFrom: ["src/**/*.{js,ts}", "!**/node_modules/**"],
};
