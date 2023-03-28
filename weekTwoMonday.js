// 1. You are given the following "car" object:
// Please use destructuring to access the color property.

let myCar = {brand: "Toyota", make: "Prius", color: "red"} 

const {color} = myCar;

console.log(color);


// 2. Write a function that converts hours into seconds. Return the result. Invoke the function.

const convertHoursToSecs = param => {
  const result = (param * 60) * 60;
  return result;
}

const resHrsToSecs = convertHoursToSecs(2);
console.log(resHrsToSecs);