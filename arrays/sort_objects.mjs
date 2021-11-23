export function sortObjectsByName(obj) {
  return obj.sort((obj1, obj2) => obj1.name.localeCompare(obj2.name));
}
