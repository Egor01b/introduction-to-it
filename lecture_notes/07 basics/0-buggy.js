const firstNum = 2;
const secondNum = 3;
const sum = sumOfArgs(firstNum, secondNum);

const sumOfArgs = (...args) => {
    const sum = 0;
    for (const i of args) {
        sum += i;
    }
    return sum;
}

console.log(sum);

