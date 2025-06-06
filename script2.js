const invert = (object) => {
  let inverted = {};
  let value;
  for (let key in object) {
    console.log(object[key]);
    value = object[key];
    inverted = { ...inverted, [value]: key }
  }
  return inverted;
};