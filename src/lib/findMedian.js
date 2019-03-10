const findMedian = (arr) => {
  const mid = Math.floor(arr.length / 2);
  const nums = [...arr].sort((a, b) => a - b);
  return arr.length % 2 !== 0
    ? nums[mid]
    : ((Number(nums[mid - 1]) + Number(nums[mid])) / 2).toFixed(2);
};

export default findMedian;
