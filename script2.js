const sumValues = (data) => {
  const valuesArray = Object.values(data);
  let acc = 0;
  let sum;
  for (let i of valuesArray) {
    sum = acc += i;
  }
  return sum;
};