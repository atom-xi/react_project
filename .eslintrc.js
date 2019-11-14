module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  parser: "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 6,//也就是ES6语法支持的意思
    "sourceType": "module",
    "ecmaFeatures": {
      "modules": true
    },
    "project": "./tsconfig.json"
  },
  plugins: [
    "@typescript-eslint"
  ],
  extends: [
    "eslint:recommended",
  ],
  rules: {
    "no-unused-vars": 0,
    "linebreak-style": [
      "off",
      "windows"
    ],
    eqeqeq: [
      "error",
      "always",
      {
        "null": "ignore"
      }
    ],
    quotes: [
      "error",
      "double"
    ],
    semi: 0,
    "no-undef": 0,
    "typescript/class-name-casing": 0 //类名驼峰
  },
  settings: {
    'import/resolver': {
      alias: true
    }
  }
}
