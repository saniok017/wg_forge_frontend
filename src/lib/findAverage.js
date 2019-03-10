const findAverage = (array) => {
  const reducer = (accumulator, currentValue) => Number(accumulator) + Number(currentValue);
  if (array.length === 1) return Number(array[0]);
  if (array.length) return array.reduce(reducer).toFixed(2) / array.length;
  return 0;
};

export default findAverage;
