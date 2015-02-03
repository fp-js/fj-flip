"use strict";

module.exports = function (fn) {
       return function () {
              for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                     args[_key] = arguments[_key];
              }

              args = args.slice(1, 2).concat(args.slice(0, 1)).concat(args.slice(2));
              return fn.apply(null, args);
       };
};