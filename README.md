# Sitecore-eslint-config

This repository houses the shared ESLint configuration for Sitecore project.

## How to Use

This configuration is designed to be used with [ESLint][]. In order to use it in your project, first install the npm module:

```bash
npm install --save-dev @node-sitecore/eslint-config
```

## Configuration

That will add the configuration to your `package.json`. From there, extend the ESLint ruleset by adding this to your `.eslintrc` file:

```js
"extends": "@node-sitecore"
```

For vue:
```js
"extends": "@node-sitecore/vue"
```

For vue-cli:
```js
"extends": "@node-sitecore/vue-cli"
```


You can extend it with your own rules and configuration. See the [ESLint docs][] for more information.

  [ESLint]: http://eslint.org/
  [ESLint docs]: http://eslint.org/docs/user-guide/configuring
