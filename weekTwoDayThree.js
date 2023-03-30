// "1. Write a function that takes an integer in minutes and converts it to seconds.
// return the result.

const minToSecs = min => min * 60;
const minToSecsRes = minToSecs(120);
console.log(minToSecsRes);



// 2. Write a function that takes an array of numbers and returns the sum of all even numbers.

const numList = [2, 5, 7, 8, 11, 20];

const evenSum = arr => {
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
     if (arr[i] % 2 === 0) {
        sum = sum + arr[i];
     }
    }
    return sum; 
  }

const evenSumRes = evenSum(numList);
console.log(evenSumRes);

