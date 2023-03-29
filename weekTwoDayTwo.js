// 1. Create a function that takes in a number of two-pointers 
// (shots made that count as 2 points each) and three-pointers 
// (shots made that count as 3 points each) made and returns a basketball team's total score. 
// Invoke the function and console.log the results.

const basketballScore = (twoPointer, threePointer) => {
    const twoPtResult = twoPointer * 2;
    const threePtResult = threePointer * 3;
    const totalScore = twoPtResult + threePtResult;
    return totalScore;
}

const gameTotal = basketballScore(25, 15);
console.log(gameTotal);