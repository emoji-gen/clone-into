'use strict'

try {
  var _cloneInto = cloneInto
} catch (e) {
  var _cloneInto = null
}

module.exports = function (obj, targetScope, options) {
  if (typeof _cloneInto === 'function') {
    return _cloneInto(obj, targetScope, options)
  } else {
    return obj
  }
}
