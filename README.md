clone-into
----------

[![npm](https://img.shields.io/npm/v/clone-into.svg?maxAge=2592000&style=flat-square)](https://www.npmjs.org/package/clone-into)
[![Travis](https://img.shields.io/travis/emoji-gen/clone-into/master.svg?maxAge=2592000&style=flat-square&x)](https://travis-ci.org/emoji-gen/clone-into)
[![Dependency Status](https://img.shields.io/gemnasium/emoji-gen/clone-into.svg?maxAge=2592000&style=flat-square)](https://gemnasium.com/github.com/emoji-gen/clone-into)
  
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
MIT @ [Emoji Generator](https://emoji.pine.moe/)
