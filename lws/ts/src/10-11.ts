import { Player2 } from "./classes/Player.js";
import { IsPlayer } from "./interfaces/IsPlayer.js";

const jordan = new Player2("Jordan", 27, "USA");
// const santiago = new Player2("Santiago", 23, "Mexico");
let santiago: IsPlayer;
santiago = new Player2("Santiago", 23, "Mexico");

// console.log(messi.play());
santiago.name = "Bappi";
santiago.age = 30;
// santiago.country = "France";
console.log(santiago.name);
console.log(santiago.age);
console.log(santiago.country);

const players2: Player2[] = [];
players2.push(santiago);

console.log(players2);
