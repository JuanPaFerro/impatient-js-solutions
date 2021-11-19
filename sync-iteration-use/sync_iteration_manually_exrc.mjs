/* npm t exercises/sync-iteration-use/sync_iteration_manually_exrc.mjs
Instructions:
– Use an iterator for arr instead of the current indexed access.
– Use assert.deepEqual() to check the objects returned by the iterator.
– That is: the assertions also check content and length of the array, but look quite different.
*/
suite("sync_iteration_manually_exrc.mjs");

import * as assert from "assert/strict";

test("instanceof", () => {
  const arr = ["a", "b", "c"];

  const it = arr[Symbol.iterator]();
  assert.deepEqual(it.next(), { value: "a", done: false });
  assert.deepEqual(it.next(), { value: "b", done: false });
  assert.deepEqual(it.next(), { value: "c", done: false });
  assert.deepEqual(it.next(), { value: undefined, done: true });
});
