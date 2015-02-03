# fj-flip

[![Build Status](https://travis-ci.org/fp-js/fj-flip.svg)](https://travis-ci.org/hemanth/fj-flip) [![npm version](https://badge.fury.io/js/fj-flip.svg)](http://badge.fury.io/js/fj-flip)
> Given a function, returns a new function with the first two arguments flipped.

## Installation

`npm install fj-flip --save`

## Usage

```js
var flip = require('fj-flip');

var mergeThree = (a, b, c) =>  ([]).concat(a, b, c);

mergeThree(1, 2, 3); //=> [1, 2, 3]

flip(mergeThree)(1, 2, 3); //=> [2, 1, 3]
```
