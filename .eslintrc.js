module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'indent':['off',2],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'semi':0,
    'quotes':'off',
    'comma-dangle':'off',
    'eol-last': 0,
    'vue/multi-word-component-names':'off',
    'space-before-function-paren':0,
    'vue/no-unused-components':'off',
  }
}