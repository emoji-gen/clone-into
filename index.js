'use strict'

if (typeof globalThis.cloneInto === 'function') {
  module.exports = globalThis.cloneInto
} else {
  module.exports = function (obj) {
    return obj
  }
}
