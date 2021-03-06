/* npm t exercises/numbers-math/parse_number_test.mjs
Instructions:
- Create the file parse_number.mjs
- Ensure the test passes
*/
suite('parse_number_test.mjs');

import * as assert from 'assert/strict';

import {parseNumber} from './parse_number.mjs';

test('parseNumber', () => {
  assert.equal(parseNumber('16'), 16);
  assert.equal(parseNumber(''), 0);
  // Whitespace
  assert.equal(parseNumber('\t 123 \n'), 123);
  // Other non-digit characters
  assert.equal(parseNumber('456#'), NaN);
  // Hexadecimal integer number
  assert.equal(parseNumber('0xFF'), 255);
  // Binary integer number
  assert.equal(parseNumber('0b111'), 7);
});
