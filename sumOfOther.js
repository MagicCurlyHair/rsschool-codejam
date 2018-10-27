function sumOfOther(arr) {
  const newArr = arr.map((num, index) => arr.reduce(
    (acc, currNum, currIndex) => (index === currIndex ? acc : acc + currNum),
    0,
  ));
  return newArr;
}

module.exports = sumOfOther;
