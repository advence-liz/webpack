module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb-base', 'plugin:react/recommended'],
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 8,
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['react'],
  rules: {
    'react/prop-types': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'import/extensions': 0,
    'import/first': 0,
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': 0,
    semi: 0, // 关闭末尾分号检测
    'func-names': 0, // 关闭强制要求函数名，方便使用匿名函数
    'comma-dangle': [2, 'never'], // 禁止末尾逗号
    'no-unused-expressions': [2, { allowShortCircuit: true, allowTernary: true }], // 禁止未使用过的表达式，但允许逻辑短路求值和三元表达式
    'no-mixed-operators': 0, // 允许运算符混用
    'no-bitwise': ['error', { allow: ['~'] }], // 禁止位运算，除了~
    'no-underscore-dangle': 0, // 允许标识符中有悬空下划线  如 _hidden
    'class-methods-use-this': 0, // 允许类方法不用this  如 render方法确实不需要用this的情况
    eqeqeq: 0,
    strict: 0,
    camelcase: 0,
    'no-shadow': 1,
    'no-unused-vars': 1,
    'global-require':0
  }
}
