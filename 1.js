// converted lists of numbers with arraythis.com

const exampleDepths = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

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
}

console.log(numberOfIncreases(exampleDepths))

import puzzleInput from "./puzzleInput.js"

console.log(numberOfIncreases(puzzleInput))