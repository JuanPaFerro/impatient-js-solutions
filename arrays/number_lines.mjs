export function numberLines(arr) {
  const aux = arr.map((el, index) => {
    let i = "0";
    if (index + 1 < 10) {
      i = `${i}${index + 1}`;
    } else {
      i = index + 1;
    }
    return `${i}: ${el}`;
  });
  return aux;
}
