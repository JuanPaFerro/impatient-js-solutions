export function convertToNumbers(arr) {
  return arr.flatMap((el) => {
    const aux = Number(el);
    if (Number.isNaN(aux)) {
      return [];
    }
    return [aux];
  });
}
