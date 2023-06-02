"use strict";
// Generics
const addID = (obj) => {
    let id = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { id });
};
let user = addID({
    name: "Mashrafi",
    age: 34,
    country: "Bangladesh",
});
// user.country;
addID(user);
// let user2 = "mashrafi";
