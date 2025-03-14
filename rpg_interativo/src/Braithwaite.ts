import { Personagem } from "./Personagem";
import { Status } from "./status";

export class Braithwaite extends Personagem {
  constructor(nome: string, vida: number, status: Status) {
    super(nome, vida, status); // construtor da classe mãe;
  }

  private podeSofrerDano(): boolean {
    return this.vida > 0;
  }

  public sofrerDano(): void {
    this.vida = this.vida - 50.0;
    this.status = Status.Sofreu_Dano;
  }
}
