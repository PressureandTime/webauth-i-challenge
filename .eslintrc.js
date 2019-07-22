module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: ['airbnb-base'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'arrow-parens': 0,
    'func-names': 0,
    'prefer-arrow-callback': 0,
    'space-before-function-paren': 0,
    'no-multiple-empty-lines':0,
  },
};
