'use strict'

// function greaterNumber(a, b) {
//     return a > b ? a : b
// }

function greaterNumber(a, b) {
    if (a > b) return a
    else return b
}

var num1 = 17
var num2 = 30

console.log("between ", num1, "and ", num2, greaterNumber(num1, num2), " is greater")

var num1 = 77
var num2 = 30

console.log("between ", num1, "and ", num2, greaterNumber(num1, num2), " is greater")