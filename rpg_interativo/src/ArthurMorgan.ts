import { Personagem } from "./Personagem";
import { Item } from "./Item";

export class ArthurMorgan extends Personagem {
  private arma: Item = new Item("Revólver", 1);
  private municao: Item = new Item("Munição", 3);

  private podeAtirar(): boolean {
    return this.municao.getQuantidade() > 0;
  };

  public atirar(): void {
    if ( this.podeAtirar()){
      this.municao.setQuantidade( this.municao.getQuantidade() - 1);
      this.olhosDaMorte++;
    };
  };

  public getMunicao(): Item {
    return this.municao; 
  };

  public getArma(): Item {
    return this.arma
  }
  
};
