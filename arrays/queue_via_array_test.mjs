/* npm t exercises/arrays/queue_via_array_test.mjs
Instructions:
– Implement the class Queue via an Array
*/
suite('queue_via_array_test.mjs');

import * as assert from 'assert/strict';

import {Queue} from './queue_via_array.mjs';

test('Using a queue', () => {
  const queue = new Queue();
  assert.equal(queue.length, 0);
  
  queue.enq('a');
  queue.enq('b');
  assert.equal(queue.length, 2);
  
  assert.equal(queue.deq(), 'a');
  assert.equal(queue.deq(), 'b');
  assert.equal(queue.length, 0);
  
  assert.throws(
    () => queue.deq(),
    { message: 'Queue is empty' });
});

test('Queue must not be a subclass of Array', () => {
  const queue = new Queue();
  assert.equal(queue instanceof Array, false);
});
