const calcSum = (...args) => {
  const sum = 0;
  for (const x of args) {
    sum += x;
  }
  return sum;
};

const firstNum = 2;
const secondNum = 3;
const sum = calcSum(firstNum, secondNum);

console.log(sum);

