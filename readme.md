# eslint plugin for hyperdom [![npm version](https://img.shields.io/npm/v/eslint-plugin-hyperdom.svg)](https://www.npmjs.com/package/eslint-plugin-hyperdom) [![npm](https://img.shields.io/npm/dm/eslint-plugin-hyperdom.svg)](https://www.npmjs.com/package/eslint-plugin-hyperdom)

This is really just a selection of rules from [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) that are useful in hyperdom JSX.

## install

```bash
npm install eslint-plugin-hyperdom --save-dev
```

## .estlintrc

```json
{
  "plugins": [
    "hyperdom"
  ],
  "extends": [
    "plugin:hyperdom/recommended"
  ]
}
```

## Rules

* [hyperdom/jsx-uses-hyperdom](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md): Prevent hyperdom to be incorrectly marked as unused
* [hyperdom/hyperdom-in-jsx-scope](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md): Prevent missing `hyperdom` when using JSX
* [hyperdom/jsx-uses-vars](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md): Prevent variables used in JSX to be incorrectly marked as unused
* [hyperdom/jsx-no-duplicate-props](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md): Prevent duplicate props in JSX
* [hyperdom/jsx-no-undef](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md): Disallow undeclared variables in JSX

## We're Hiring!
Featurist provides full stack, feature driven development teams. Want to join us? Check out [our career opportunities](https://www.featurist.co.uk/careers/).
