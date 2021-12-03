import exampleData from "./exampleData.js";

export default function positionProductCalculator(arr) {
    let horizontal = 0;
    let depth = 0;
    let aim = 0;
    arr.forEach(e => {
        if (e[0] === "forward") {
            horizontal += e[1];
            depth += aim * e[1];
        }

        if (e[0] === "up") {
            aim -= e[1];
        }

        if (e[0] === "down") {
            aim += e[1];
        }
    })

    return horizontal * depth;
}

console.log("2 example:", positionProductCalculator(exampleData));

import puzzleInput from "./puzzleInput.js";

console.log("2 solution:", positionProductCalculator(puzzleInput));