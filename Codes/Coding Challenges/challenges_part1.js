"use strict";

//FIRST CHALLANGE
/*
let weightMarks = 78;
let weightJohn = 92;
let heightMarks = 1.69;
let heightJohn = 1.95;
let bmiMarks;
let bmiJohn;
bmiMarks = weightMarks / heightMarks ** 2;
bmiJohn = weightJohn / heightJohn ** 2;
markHigherBMI = bmiMarks > bmiJohn;

console.log(markHigherBMI);
let weightMarks = 95;
let weightJohn = 85;
let heightMarks = 1.88;
let heightJohn = 1.76;
let bmiMarks;
let bmiJohn;
bmiMarks = weightMarks / heightMarks ** 2;
bmiJohn = weightJohn / heightJohn ** 2;
markHigherBMI = bmiMarks > bmiJohn;

console.log(markHigherBMI);

//Coding Challenge #2
let weightMarks = 78;
let weightJohn = 92;
let heightMarks = 1.69;
let heightJohn = 1.95;
let bmiMarks;
let bmiJohn;
bmiMarks = weightMarks / heightMarks ** 2;
bmiJohn = weightJohn / heightJohn ** 2;
if (bmiJohn > bmiMarks) {
  console.log(`John's BMI ${bmiJohn} is higher than Mark's ${bmiMarks}!`);
} else {
  console.log(`Mark's BMI ${bmiMarks} is higher than John's ${bmiJohn}!`);
}

//Coding Challenge #3
//1
const dolphinArray = [96, 111, 91];
const koalasArray = [88, 101, 99];

// Calculate average
function calcAverage(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / 3;
}
const dolphinAve = calcAverage(dolphinArray);
const koalasAve = calcAverage(koalasArray);
console.log(dolphinAve, koalasAve);

//2
if (dolphinAve > koalasAve) {
  console.log("Team Dolphin wins!");
} else if (dolphinAve < koalasAve) {
  console.log("Team Koalas wins!");
} else {
  console.log("It is a draw");
}

//3
// function to check if any single score is over 100
function minimumRequire(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 100) {
      return true;
      break;
    } else {
      continue;
    }
  }
}

if (dolphinAve > koalasAve && minimumRequire(dolphinArray)) {
  console.log("Team Dolphin wins!");
} else if (dolphinAve < koalasAve && minimumRequire(koalasArray)) {
  console.log("Team Koalas wins!");
} else if (
  dolphinAve === koalasAve &&
  minimumRequire(koalasArray) &&
  minimumRequire(dolphinArray)
) {
  console.log("It is a draw");
} else {
  console.log("No team win the tournament.");
}

//Coding Challenge #4
let bill;
bill = 430;
let tip;
if (bill <= 300 && bill >= 50) {
  tip = bill * 0.15;
} else {
  tip = bill * 0.2;
}
console.log(
  `For a bill of ${bill}, the tip is ${tip} hence total value is ${bill + tip}.`
);
*/
