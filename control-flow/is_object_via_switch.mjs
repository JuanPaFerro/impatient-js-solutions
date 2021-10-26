export function isObject(x) {
  if (x !== null) {
    switch (typeof x) {
      case "object":
      case "function":
        return true;

      default:
        return false;
    }
  }
  return false;
}
