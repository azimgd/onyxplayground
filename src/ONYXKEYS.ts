export default Array.from(Array(10000).keys()).reduce((acc, item) => {
  // @ts-ignore
  acc[item.toString()] = item.toString();
  return acc;
}, {});
