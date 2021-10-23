export function isSafeInteger(number) {
  let limit = 2 ** 53;
  if (
    typeof number !== "number" ||
    number !== Math.floor(number) ||
    number >= limit ||
    number <= -limit
  ) {
    return false;
  }
  return true;
}
