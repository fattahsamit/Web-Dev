// Generics

const addID = <
  T extends {
    name: string;
    age: number;
  }
>(
  obj: T
) => {
  let id = Math.floor(Math.random() * 100);
  return { ...obj, id };
};

let user = addID({
  name: "Mashrafi",
  age: 34,
  country: "Bangladesh",
});

// user.country;

addID(user);

// let user2 = "mashrafi";
