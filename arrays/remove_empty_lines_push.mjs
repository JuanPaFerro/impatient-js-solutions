export function removeEmptyLines(arr) {
  const newArr = [];
  for (const element of arr) {
    if (element) {
      newArr.push(element);
    }
  }
  return newArr;
}
