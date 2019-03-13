module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
        "jest": true,
    },
    "extends": "airbnb",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "function-paren-newline": ["error", "consistent"],
      "react/destructuring-assignment": [0,"never"],
      "react/prop-types": [0],
      "no-param-reassign":["error", { "props": false }],
      "no-shadow": "off",
      "import/no-named-as-default": 0,
      "jsx-a11y/label-has-associated-control": [ "error", {
        "required": {
          "some": [ "nesting", "id"  ]
        }
      }],
      "jsx-a11y/label-has-for": [ "error", {
        "required": {
          "some": [ "nesting", "id"  ]
        }
      }]
    }
};