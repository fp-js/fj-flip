"use strict";

module.exports = function (fn) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var params = [].slice.call(args, 0);
    params = params.slice(1, 2).concat(params.slice(0, 1)).concat(params.slice(2));
    return fn.apply(null, params);
  };
};