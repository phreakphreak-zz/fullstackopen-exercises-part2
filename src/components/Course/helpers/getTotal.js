const getTotal = (arr) => {
  let elements = arr.map((item) => {
    return item.exercises;
  });
  let total = elements.reduce((count, value) => count + value);
  return total;
};

export default getTotal;
