let vec1 = [1, 2, 4, 6, 7, 8];
let vec2 = [1, 2, 4, 5, 6, 7, 8];

const unionOrdenara = (v1, v2) => {
  let union = v1.concat(v2);
  let newArray = union.filter((el, index) => union.indexOf(el) === index);
  return newArray.sort((a, b) => a - b);
};

console.log(unionOrdenara(vec1, vec2));
