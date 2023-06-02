// let myFunc: Function;
// myFunc = () => {
//   console.log("Hello");
// };

// const myFunc = (a: string, b: string, c?: string) => {

const myFunc = (a: number, b: number, c: string = "C"): number => {
  //   console.log(c);
  //   console.log(`Hello ${a} ${b}`);
  return a + b;
};

myFunc(5, 3);
