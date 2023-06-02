"use strict";
// let myFunc: Function;
// myFunc = () => {
//   console.log("Hello");
// };
// const myFunc = (a: string, b: string, c?: string) => {
const myFunc = (a, b, c = "C") => {
    //   console.log(c);
    //   console.log(`Hello ${a} ${b}`);
    return a + b;
};
myFunc(5, 3);
