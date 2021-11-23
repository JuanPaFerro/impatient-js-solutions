export function map(arr, callback) {
  return arr.reduce((arr2, el, index) => {
    arr2.push(callback(el, index, arr));
    return arr2;
  }, []);
}
