import exampleData from "./exampleData.js";

export default function positionProductCalculator(arr) {
    let horizontal = 0;
    let depth = 0;
    arr.forEach(e => {
        if (e[0] === "forward") {
            horizontal += e[1];
        }

        if (e[0] === "up") {
            depth -= e[1];
        }

        if (e[0] === "down") {
            depth += e[1];
        }
    })

    return horizontal * depth;
}

console.log("1 example:", positionProductCalculator(exampleData));

import puzzleInput from "./puzzleInput.js";

console.log("1 solution:", positionProductCalculator(puzzleInput));