'use strict'

try {
  var _cloneInto = cloneInto
} catch (e) {
  var _cloneInto = null
}

if (typeof _cloneInto === 'function') {
  module.exports = function (obj, targetScope, options) {
    return _cloneInto(obj, targetScope, options)
  };
} else {
  module.exports = function (obj, targetScope, options) {
    return obj
  };
}
