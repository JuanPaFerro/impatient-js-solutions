export function removeExtension(str) {
  const index = str.lastIndexOf(".");
  if (index === -1) {
    return str;
  }
  if (index === 0) {
    return "";
  }
  return str.slice(0, index);
}
