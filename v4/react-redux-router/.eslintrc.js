module.exports = {
    env: {
      es6: true,
      node: true
    },
    parser: 'babel-eslint',
    extends: ['standard', 'plugin:react/recommended'],
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      }
    },
    plugins: ['react'],
    rules: {
      'no-console': 'off',
      "react/prop-types":0
    }
  }