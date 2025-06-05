/* const countOccurencies = (array) => {
  let counts = {};
  array.forEach(item => {
    counts[item] ? counts[item] += 1 : counts[item] = 1;
  })
  return counts;
};

const array1 = ["a", "b", "a", "c", "b", "a"];

console.log(countOccurencies(array1)); */

const getMaxKey = (data) => {
  let counts = [];
  for (let i in data) {
    counts.push(data[i]);
  }
  let maxValue = Math.max(...counts);
  let maxValueIndex = counts.findIndex(element => element === maxValue);
  return Object.keys(data)[maxValueIndex];
};