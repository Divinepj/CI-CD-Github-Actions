module.exports = [
  {
    files: ["**/*.js"],
    extends: ["eslint:recommended"],
    rules: {
      "indent": ["error", 2],
      "linebreak-style": ["error", "unix"],
      "quotes": ["error", "single"],
      "semi": ["error", "always"],
      // additional, custom rules here
    },
    env: {
      "node": true,
      "es6": true,
      "jest": true  // If you are using Jest for testing
    }
  }
];
