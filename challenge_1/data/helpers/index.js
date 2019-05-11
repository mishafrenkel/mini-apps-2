const objectFilter = (excludeList, data) => {
  const newData = Object.keys(data)
    .reduce((acc, item) => {
      if (!excludeList.includes(item)) {
        Object.assign(acc, { [item]: data[item] });
      }
      return acc;
    }, {});
  return newData;
};

module.exports = {
  objectFilter,
};
