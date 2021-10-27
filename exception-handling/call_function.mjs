export function callFunction(func) {
  try {
    func();
  } catch (error) {
    return { failure: error };
  }
  return { success: func() };
}
