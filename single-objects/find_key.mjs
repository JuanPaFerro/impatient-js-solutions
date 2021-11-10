export function findKey(obj, callback) {
  for (const [key, value] of Object.entries(obj)) {
    if (callback(value, key, obj)) {
      return key;
    }
  }
  return undefined;
}
