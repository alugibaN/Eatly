/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {
  // transform: {
  //   "^.+\\.jsx?$": "babel-jest",
  //   "^.+\\.svg$": "jest-transformer-svg"
  // },
  testEnvironment: "jsdom",
  coveragePathIgnorePatterns: ["\\\\node_modules\\\\"],
  // An array of directory names to be searched recursively up from the requiring module's location
  moduleDirectories: ["node_modules"],
  modulePaths: ["<rootDir>src"],
  // moduleNameMapper: { // нужен для css просто чтобы убрать ошибку и jest  знал как обробатывать css но будут пустые строчки вместо классов 
  //   "^.+\\.(css|less|scss)$": "babel-jest",
  // },


  moduleNameMapper: { // Нужен для css  без него нельзя будет найти класс у элемента 
    "\\.(s?css)$": "identity-obj-proxy",
    "\\.svg": "<rootDir>/config/jest/jestEmptyComponent.tsx"
  },

  // An array of file extensions your modules use
  moduleFileExtensions: [
    "js",
    "mjs",
    "cjs",
    "jsx",
    "ts",
    "tsx",
    "json",
    "node",
  ],

  testMatch: ["<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)"],

  rootDir: "../../",
  setupFilesAfterEnv: ["<rootDir>/config/jest/setupTest.ts"],

  // transformIgnorePatterns: [
  //     "node_modules/(?!(@testing-library/.*))"
  //   ],
};
export default config;
