import exampleData from "./exampleData.js";

function mostCommon(arr) {
    return arr.reduce(
        (a,c,i,arr)=>
         (arr.filter(e => e===a).length >= arr.filter(e => e===c).length ? a : c))
}

function elementsAtIndex(arr, i) {
    return arr.map(e => e.toString()).map(e => e[i])
}

function gammaRateCalculator(arr) {
    return arr[0].split("").map((e, i) => mostCommon(elementsAtIndex(arr, i))).join("");
}

function epsilonRateCalculator(arr) {
    return gammaRateCalculator(arr).split("").map(e => 
        {if (e === "1") {
            return "0";
        } else {
            return "1"
        }}).join("")
}

function epsilonGammaProduct(arr) {
return parseInt(gammaRateCalculator(arr), 2) * parseInt(epsilonRateCalculator(arr), 2)
}

console.log("1 example:", epsilonGammaProduct(exampleData));

import puzzleInput from "./puzzleInput.js";

console.log("1 solution:", epsilonGammaProduct(puzzleInput));

export { mostCommon, elementsAtIndex }