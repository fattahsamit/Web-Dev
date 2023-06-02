class Player {
  name: string;
  age: number;
  country: string;

  constructor(n: string, a: number, c: string) {
    this.name = n;
    this.age = a;
    this.country = c;
  }

  play() {
    console.log(`${this.name} from ${this.country} is playing`);
  }
}

const ronaldo = new Player("Ronaldo", 37, "Portugal");
const messi = new Player("Messi", 35, "Argentina");

console.log(messi.play());
console.log(messi.age);

const players: Player[] = [];
players.push(messi);

console.log(players);
