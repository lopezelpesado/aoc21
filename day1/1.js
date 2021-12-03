// converted lists of numbers with arraythis.com

import exampleData from "./exampleData.js";

export default function numberOfIncreases(arr) {
  let count = 0;
  arr.forEach((e, i) => {
    if (i) {
      if (e > arr[i - 1]) {
        count++
      }
    }
  })
  return count;
};

console.log("1 example:", numberOfIncreases(exampleData));

import puzzleInput from "./puzzleInput.js";

console.log("1 solution:", numberOfIncreases(puzzleInput));