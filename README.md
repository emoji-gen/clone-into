clone-into
----------

[![npm](https://img.shields.io/npm/v/clone-into.svg?maxAge=2592000)](https://www.npmjs.org/package/clone-into)
[![test](https://github.com/emoji-gen/clone-into/actions/workflows/build.yml/badge.svg?branch=main)](https://github.com/emoji-gen/clone-into/actions/workflows/build.yml)
[![License](https://img.shields.io/github/license/emoji-gen/clone-into.svg)](LICENSE)

:fire: Wrapper function for Firefox's [cloneInto](https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XPCOM/Language_Bindings/Components.utils.cloneInto)

## Getting started

```
$ yarn add clone-into
```

or

```
$ npm install --save clone-into
```

If it execute on Google Chrome or other browsers, this function return an argument obj as it is.

```js
const cloneInto = require('clone-into')

const obj = { data: [ 1, 2, 3 ] }
const clonedObj = cloneInto(obj, document.defaultView)
```

## Features

- TypeScript built-in supports

## See also

- [Components.utils.cloneInto (Mozilla MDN)](https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XPCOM/Language_Bindings/Components.utils.cloneInto)

## License
MIT &copy; [Emoji Generator](https://emoji-gen.ninja/)
