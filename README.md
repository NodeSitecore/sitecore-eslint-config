# Sitecore-eslint-config
[![Build Status](https://travis-ci.org/NodeSitecore/sitecore-eslint-config.svg?branch=master)](https://travis-ci.org/NodeSitecore/sitecore-eslint-config)
[![Coverage Status](https://coveralls.io/repos/github/NodeSitecore/sitecore-eslint-config/badge.svg?branch=master)](https://coveralls.io/github/NodeSitecore/sitecore-eslint-config?branch=master)
[![Package Quality](http://npm.packagequality.com/badge/@node-sitecore/config.png)](http://packagequality.com/#?package=@node-sitecore/config)
[![npm version](https://badge.fury.io/js/%40node-sitecore%2Feslint-config.svg)](https://badge.fury.io/js/%40node-sitecore%2Fconfig)
[![Dependencies](https://david-dm.org/NodeSitecore/sitecore-eslint-config.svg)](https://david-dm.org/NodeSitecore/sitecore-eslint-config#info=dependencies)
[![img](https://david-dm.org/NodeSitecore/sitecore-eslint-config/dev-status.svg)](https://david-dm.org/NodeSitecore/sitecore-eslint-config/#info=devDependencies)
[![img](https://david-dm.org/NodeSitecore/sitecore-eslint-config/peer-status.svg)](https://david-dm.org/NodeSitecore/sitecore-eslint-config/#info=peerDependenciess)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

> A shared eslint configuration for Sitecore, JavaScript and Vue.

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

## Contributing

Read our [contribution documentation](./CONTRIBUTING.md).

## License

The MIT License (MIT)

Copyright (c) 2018 NodeSitecore

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[travis]: https://travis-ci.org/


You can extend it with your own rules and configuration. See the [ESLint docs][] for more information.

  [ESLint]: http://eslint.org/
  [ESLint docs]: http://eslint.org/docs/user-guide/configuring
