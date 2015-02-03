import assert from 'assert';
import flip from './';

let div = (x,y) => x/y;
let flipDiv = flip(div);

it('fj-flip', () => {
  assert.equal(flipDiv(3,2),0.6666666666666666);
});
