export function updateProperty(input, propertyName, propertyValue) {
  let output = { ...input };
  output[propertyName] = propertyValue;
  return output;
}
