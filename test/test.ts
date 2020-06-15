import { equal } from 'assert';
import { swap } from '../src';

describe('swap', () => {
  it('should swap two array elements in memory', () => {
    const array = [0, 1];

    // swap index 0 and 1 for given array
    swap(array, 0, 1);

    equal(array[0], 1);
    equal(array[1], 0);
  });
});
