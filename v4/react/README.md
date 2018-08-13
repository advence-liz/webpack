# react

## eslint 配置继承父目录

```js
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
    // 'react/jsx-uses-vars': 2
  }
}
```