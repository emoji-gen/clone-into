'use strict'

try {
  var _cloneInto = cloneInto
} catch (e) {
  var _cloneInto = null
}

module.exports = function (obj, targetScope, options) {
  if (_cloneInto) {
    return _cloneInto(obj, targetScope, options)
  } else {
    return obj
  }
}
