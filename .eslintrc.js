module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'standard'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    "func-names": "off",
    "no-alert": "off",
    "no-console": "off",
    "no-plusplus": "off",
    "no-unused-vars": "off",
    "vars-on-top": "off",
    "no-multi-spaces": "off",
    "key-spacing": "off",
    "max-len": "off",
    "no-undef": "off",
    "no-param-reassign": "off",
    "eqeqeq": "off",
    "no-loop-func": "off",
    "no-restricted-globals": "off",
    "no-use-before-define": "off",
    "no-shadow": "off",
    "block-scoped-var": "off"
  }
}
