clone-into
----------

[![npm](https://img.shields.io/npm/v/clone-into.svg?maxAge=2592000)](https://www.npmjs.org/package/clone-into)
[![Build Status](https://travis-ci.org/emoji-gen/clone-into.svg?branch=master)](https://travis-ci.org/emoji-gen/clone-into)
[![dependencies Status](https://david-dm.org/emoji-gen/clone-into/status.svg)](https://david-dm.org/emoji-gen/clone-into)
[![devDependencies Status](https://david-dm.org/emoji-gen/clone-into/dev-status.svg)](https://david-dm.org/emoji-gen/clone-into?type=dev)
[![Greenkeeper badge](https://badges.greenkeeper.io/emoji-gen/clone-into.svg)](https://greenkeeper.io/)
[![Osushi](https://img.shields.io/badge/donate-osushi-EA2F57.svg)](https://osushi.love/intent/post/9ad90add99954e62ac79251606c10eec)

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
