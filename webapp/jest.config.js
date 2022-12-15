module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  transform: {
    "^.+\\.(js|mjs|cjs|jsx)?$": "<rootDir>/node_modules/babel-jest",
  },
  transformIgnorePatterns: [],
};
