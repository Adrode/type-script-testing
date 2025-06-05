const flatten = (array) => {
  for (let i = 0; i <= array.length; i++) {
    if (Array.isArray(array[i])) {
      array.splice(i, -1, ...array[i])
    }
  }
  return array;
}; 