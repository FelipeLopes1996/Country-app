export const filterCoutryName = (arr = [], value) => {
  return arr.filter((v) => {
    return v.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
      ? v
      : null;
  });
};
export const filterRegionName = (arr = [], value) => {
  return arr.filter((v) => {
    return v.region === value ? v : null;
  });
};
