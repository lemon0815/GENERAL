module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true
  },
  globals: {
    __static: true,
    vkb: true,
    __bridge: true,
    NaBridge: true
  },
  extends: 'standard',
  plugins: ['html'],
  rules: {
    camelcase: 0,
    'no-new': 0,
    indent: ['off', 2],
    'space-before-function-paren': [
      'off',
      {
        anonymous: 'ignore',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 2,
        maxEOF: 1
      }
    ],
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
