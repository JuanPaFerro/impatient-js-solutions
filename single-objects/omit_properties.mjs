export function omitProperties(obj, ...keys) {
  const filteredEntries = Object.entries(obj).filter(
    ([key, value]) => !keys.includes(key)
  );
  return Object.fromEntries(filteredEntries);
}
