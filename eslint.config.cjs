const { FlatCompat } = require('@eslint/eslintrc');
const compat = new FlatCompat();

module.exports = compat.config({
  root: true, 
  overrides: [
    {
      files: ["**/*.js"],
      rules: {
        "indent": ["error", 2],
        "linebreak-style": ["error", "unix"],
        "quotes": ["error", "single"],
        "semi": ["error", "always"],
        
      },
      env: {
        "node": true,
        "es6": true,
        "jest": true
      }
    }
  ]
});
