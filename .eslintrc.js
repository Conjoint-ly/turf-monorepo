require('dotenv').config()

module.exports = {
  "extends": [
    "airbnb-base",
    "plugin:vue/recommended"
  ],
  "rules": {
    "import/no-unresolved": [0],
    "import/prefer-default-export": [0],
    "import/no-dynamic-require": [0],
    "global-require": [0],

    "vue/no-v-html": [0],
    "vue/require-default-prop": [0],
    "func-names": [0],
    "no-restricted-globals": [0],
    "no-nested-ternary": [0],
    "no-param-reassign": [0],
    "linebreak-style": [0],
    "no-console": [process.env.NODE_ENV === 'development' ? 0 : 1],
    "no-alert": [process.env.NODE_ENV === 'development' ? 0 : 1]
  }
}