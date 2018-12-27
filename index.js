'use strict'

var global = (0, eval)('this')

if (typeof global.cloneInto === 'function') {
  module.exports = global.cloneInto
} else {
  module.exports = function (obj) {
    return obj
  }
}
