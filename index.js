var react = require('eslint-plugin-react')

var ruleNames = [
  'jsx-uses-hyperdom',
  'hyperdom-in-jsx-scope',
  'jsx-uses-vars',
  'jsx-no-duplicate-props',
  'jsx-no-undef'
]

function allErrors(names) {
  var rules = {}

  names.forEach(function (name) {
    rules[name] = 'error'
  })

  return rules
}

function object(pairs) {
  var obj = {}

  pairs.forEach(function (pair) {
    obj[pair[0]] = pair[1]
  })

  return obj
}

module.exports = {
  rules: object(ruleNames.map(function (name) {
    return [name, react.rules[name.replace(/\bhyperdom\b/g, 'react')]]
  })),
  configs: {
    recommended: {
      plugins: ['hyperdom'],
      settings: {
        react: {
          pragma: 'hyperdom',
        }
      },
      parserOptions: {
        react: {

        },
        ecmaFeatures: {
          jsx: true
        }
      },
      rules: allErrors(ruleNames.map(function (name) { return 'hyperdom/' + name }))
    }
  }
}
