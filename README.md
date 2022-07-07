# clone-into &nbsp;[![npm](https://img.shields.io/npm/v/@emoji-gen/clone-into.svg?maxAge=2592000)](https://www.npmjs.org/package/@emoji-gen/clone-into) [![test](https://github.com/emoji-gen/clone-into/actions/workflows/build.yml/badge.svg?branch=main)](https://github.com/emoji-gen/clone-into/actions/workflows/build.yml) [![License](https://img.shields.io/github/license/emoji-gen/clone-into.svg)](LICENSE)

:fire: Wrapper function for Firefox's [cloneInto](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts)
<br>
<br>

## Getting started

```sh
$ npm install --save @emoji-gen/clone-into # for npm users
$ yarn add @emoji-gen/clone-into           # for yarn users
```

If it execute on Google Chrome or other browsers, this function return an argument obj as it is.

```js
import { cloneInto } from '@emoji-gen/clone-into'

const obj = { data: [ 1, 2, 3 ] }
const clonedObj = cloneInto(obj, document.defaultView)
```

## Features

- Supports TypeScript
- Supports both CommonJS and ESModules

## Development
### Build

```
$ yarn run build
```

### Test

```
$ yarn test
```

## License
MIT &copy; [Emoji Generator](https://emoji-gen.ninja/)
