export function filter(arr, callback) {
  return arr.reduce((arr2, el, index) => {
    callback(el, index, arr) ? arr2.push(el): '';    
    return arr2;
  }, []);
}
