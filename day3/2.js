import exampleData from "./exampleData.js";
import { elementsAtIndex } from "./1.js";

function mostCommonBinWithPref (arr, pref) {
    const result = {"0": 0, "1": 0};
    arr.forEach(e => result[e]++ );
    if (result[0] === result[1]) {
        return pref;
    } else if (result[0] > result[1]) {
        return "0"
    } else {
        return "1"
    }
}

function leastCommonBinWithPref (arr, pref) {
    const result = {"0": 0, "1": 0};
    arr.forEach(e => result[e]++ );
    if (result[0] === result[1]) {
        return pref;
    } else if (result[0] > result[1]) {
        return "1"
    } else {
        return "0"
    }
}

function oxygenGeneratorRating(arr) {
    let result = [];
    let index = 0;

    while (result.length !== 1) {
        if (result.length !== 0) {
            arr = result;
        }
        const bitFilter = mostCommonBinWithPref(elementsAtIndex(arr, index), "1");
        result = arr.filter(e => e[index] === bitFilter);
        index++
    }

    return result[0];
}

function co2ScrubberRating(arr) {
    let result = [];
    let index = 0;

    while (result.length !== 1) {
        if (result.length !== 0) {
            arr = result;
        }
        const bitFilter = leastCommonBinWithPref(elementsAtIndex(arr, index), "0");
        result = arr.filter(e => e[index] === bitFilter);
        index++
    }

    return result[0];
}

function lifeSupportRating(arr) {
    return parseInt(co2ScrubberRating(arr), 2) * parseInt(oxygenGeneratorRating(arr), 2)
}

console.log("2 example:", lifeSupportRating(exampleData));

import puzzleInput from "./puzzleInput.js";

console.log("2 solution:", lifeSupportRating(puzzleInput));