import numberOfIncreases from "./1.js";
import exampleData from "./exampleData.js";

function windowSum(arr) {
    const newArr = arr.map((e, i) => {
        if (i < arr.length - 2) {
            const first = e;
            const second = arr[i + 1]
            const third = arr[i + 2]
            return first + second + third;
        }
    })

    return newArr.splice(0, arr.length - 2);
}

console.log("2 example:", numberOfIncreases(windowSum(exampleData)));

import puzzleInput from "./puzzleInput.js";

console.log("2 solution:", numberOfIncreases(windowSum(puzzleInput)));