const aumentarValores = (array) => {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray[i] = array[i] + 1;
  }
  return newArray;
};

console.log(aumentarValores([1, 2, 3, 4, 5, 7]));
