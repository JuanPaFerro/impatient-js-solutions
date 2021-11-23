export function replaceObjects(arr) {
  return arr.flatMap((el) => {
    let aux = [];
    if (el.repeat === 0) {
      return aux;
    } else {
      for (let i = 0; i < el.repeat; i++) {
        aux.push(el.value);
      }
    }
    return aux;
  });
}
