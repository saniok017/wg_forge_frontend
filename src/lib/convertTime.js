const convertTime = (unixTimestamp, onlyDate) => {
  if (!unixTimestamp) return 'n/a';
  const time = new Date(unixTimestamp * 1000);
  if (onlyDate) return time.toLocaleDateString('en-US');
  return `${time.toLocaleDateString('en-US')}, ${time.toLocaleTimeString('en-US')}`;
};

export default convertTime;
