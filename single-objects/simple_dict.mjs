export function createDict() {
  return Object.create(null);
}
export function setValue(obj, key, value) {
  obj[key] = value;
}
export function getValue(obj, key) {
  return obj[key];
}
export function hasKey(obj, key) {
  return key in obj;
}
export function getKeys(obj) {
  return Object.keys(obj);
}
