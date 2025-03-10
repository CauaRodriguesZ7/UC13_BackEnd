import { Personagem } from "./Personagem";
import { Item } from "./Item";

export class JohnMarston extends Personagem {
  private arma: Item = new Item("Escopeta", 1);
  private municao: Item = new Item("Municão", 2);

  private podeAtirar(): boolean {
    return this.municao.getQuantidade() > 0;
  }

  public atirar(): void {
    if (this.podeAtirar()) {
      this.municao.setQuantidade(this.municao.getQuantidade() - 1);
      this.olhosDaMorte++;
    }
  }

  public getMunicao(): Item {
    return this.municao;
  }

  public getArma(): Item {
    return this.arma
  }
}
