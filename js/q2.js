console.log("Question 2");

const numbers = [1,2,3,4,5,6,7,8,9,10];

const oddNum = numbers.filter (x => x%2 !== 0);

console.log (oddNum)

const divisibleBy2or5 = numbers.filter (x => x%2 == 0 && x%5 == 0);

console.log (divisibleBy2or5)

const divisibleBy3Squared = numbers.map(x => Math.sqrt(x)).filter(x => x%3 == 0);

console.log (divisibleBy3Squared)

const sumNum = numbers
    .reduce((val, x) => val + x, 0)
    .map(x => Math.sqrt(x))
    .filter(x => x%5 == 0);

console.log (sumNum)