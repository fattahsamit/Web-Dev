// Explicit types
let a: string;
let b: number;
// a = 24;
// b = "43";

// Union types
// normal variable
let e: string | number;
// Array
let d: (number | string)[] = [];
d.push("aefae");
console.log(d);

// Dynamic type
let f;
let g: any;
g = 5;
g = "car";

let h: any[] = [];
h.push("Bangladesh");
h.push(55);
console.log(h);

let i: {
  name: any;
  age: any;
};

i = { name: "Bangladesh", age: 45 };
