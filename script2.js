const groupBy = (data, key) => {
  let result = {};
  data.forEach(element => {
    if (!result[element[key]]) {
      result = {
        ...result,
        [element[key]]: [element]
      }
    } else {
      result = {
        ...result,
        [element[key]]: [...result[element[key]], element]
      }
    }
  })
  return result;
};