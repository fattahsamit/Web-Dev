import { IsPlayer } from "../interfaces/IsPlayer.js";

export class Player2 implements IsPlayer {
  constructor(
    public name: string,
    private age: number,
    readonly country: string
  ) {}

  getProperty() {
    return this.age;
  }

  play() {
    console.log(`${this.name} from ${this.country} is playing`);
  }
}
