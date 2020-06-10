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
    indent: ['error', 2],
    'comma-dangle': ['error', 'never'],
    quotes: ['error', 'single'],
    semi: ['error', 'never']
  }
}
