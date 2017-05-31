# eslint plugin for hyperdom

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
