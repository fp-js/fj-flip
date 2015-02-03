"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var assert = _interopRequire(require("assert"));

var flip = _interopRequire(require("./"));

var div = function (x, y) {
  return x / y;
};
var flipDiv = flip(div);

it("fj-flip", function () {
  assert.equal(flipDiv(3, 2), 0.6666666666666666);
});