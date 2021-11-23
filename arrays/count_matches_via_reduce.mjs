export function countMatches(arr, callback) {
  return arr.reduce((acc, el) => {
    if (callback(el)) {
      acc += 1;
    }
    return acc;
  }, 0);
}
