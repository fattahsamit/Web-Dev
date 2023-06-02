"use strict";
let calculation;
// add = (a: number, b: number) => {
//   return a + b;
// };
calculation = (a, b, c) => {
    if (c === "add") {
        return a + b;
    }
    else {
        return a - b;
    }
};
console.log(calculation(5, 6, "minus"));
let userDetails;
userDetails = (id, user) => { };
