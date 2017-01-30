clone-into
----------

:fire: Wrapper function for Firefox's cloneInto

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

## License
MIT @ [Emoji Generator](https://emoji.pine.moe/)
