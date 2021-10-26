export function arrayToString(arr) {
  let resp = ``;
  for (const [index, element] of arr.entries()) {
    if (index > 0) {
      resp += `\n`;
    }
    resp += `${index+1}. ${element}`;
  }
  return resp;
}
