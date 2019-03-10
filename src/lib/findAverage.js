const findAverage = (array) => {
  const reducer = (accumulator, currentValue) => Number(accumulator) + Number(currentValue);
  return array.reduce(reducer).toFixed(2) / array.length;
};

export default findAverage;
