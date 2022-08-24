const newArray = [];
const arrayOne = [5, 1, 6, 9, 7];
const arrayTwo = [62, 90, 1, 2];
const findMaximum = (a, b) => {
  const output1 = [...a];
  const output2 = [...b];
  newArray.push(...output1);
  newArray.push(...output2);
  const maxNumber = Math.max(...newArray)
  return maxNumber;
}

const result = findMaximum(arrayOne,arrayTwo);
console.log(result);