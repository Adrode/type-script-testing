const countOccurencies = (array) => {
  let counts = {};
  array.forEach(item => {
    counts[item] ? counts[item] += 1 : counts[item] = 1;
  })
  return counts;
};

const array1 = ["a", "b", "a", "c", "b", "a"];

console.log(countOccurencies(array1));