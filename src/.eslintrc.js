module.exports = {
  "root": true,
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true
  },
  "parser": '@typescript-eslint/parser',
  "extends": ["eslint:recommended", "plugin:react/recommended"],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module",
    "project": "./tsconfig.json",
  },
  "plugins": [
    "react", "typescript"
  ],
  "rules": {
    "linebreak-style": [
      "off",
      "windows"
    ],
    'eqeqeq': [
      'error',
      'always',
      {
        null: 'ignore'
      }
    ],
    "quotes": [
      "error",
      "double"
    ],
    "semi": 0,
    "no-undef": 0,
    "typescript/class-name-casing": 2 //类名驼峰
  }
};