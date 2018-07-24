module.exports = {
  env: {
    es6: true,
    node: true
  },
  parser: 'babel-eslint',
  extends: 'standard',
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    }
  },
  plugins: ['react'],
  rules: {
    'no-console': 'off'
  }
}
