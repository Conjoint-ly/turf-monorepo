require('dotenv').config()

module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "parserOptions": {
    "parser": "babel-eslint"
  },
  "extends": [
    "airbnb-base",
    "plugin:vue/recommended"
  ],
  "rules": {
    "import/no-unresolved": [0],
    "import/prefer-default-export": [0],
    "import/no-dynamic-require": [0],
    "import/no-extraneous-dependencies": [0],
    "import/no-mutable-exports": [0],
    "import/extensions": [0],
    "global-require": [0],
    "max-classes-per-file": [0],
    "class-methods-use-this": [0],
    "no-sequences": [0],
    "no-async-promise-executor": [0],

    "vue/no-v-html": [0],
    "vue/require-default-prop": [0],
    "vue/prop-name-casing": [0],
    "vue/require-component-is": [0],
    "func-names": [0],
    "no-restricted-globals": [0],
    "no-nested-ternary": [0],
    "no-param-reassign": [0],
    "linebreak-style": [0],
    "no-console": [process.env.NODE_ENV === 'development' ? 0 : 1],
    "no-alert": [process.env.NODE_ENV === 'development' ? 0 : 1],
    "max-len": [0],
    "vue/max-attributes-per-line": [1, {
      "singleline": 3,
    }]
  }
}
