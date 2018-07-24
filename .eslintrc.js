module.exports = {
  env: {
    es6: true,
    node: true
  },
  parser: "babel-eslint",
  extends: "standard",
  parserOptions: {
    ecmaFeatures: {
      ecmaVersion: es2016,
      jsx: true
    },
    sourceType: "module"
  },

  rules: {
    "no-console": "off"
  }
}
