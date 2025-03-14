import { Personagem } from "./Personagem";
import { Item } from "./Item";
import { Status } from "./status";
import { Braithwaite } from "./Braithwaite";

export class JohnMarston extends Personagem {
  private arma: Item = new Item("Revólver", 1);
  private municao: Item = new Item("Munição", 3);
  private olhosDaMorte: number;

    constructor (nome: string, vida: number, status: Status, olhosDaMorte: number) {
      super(nome, vida, status)
      this.olhosDaMorte = olhosDaMorte;
    }

      private podeAtirar(): boolean {
        return this.municao.getQuantidade() > 0;
      };
    
      protected aumentarXP(): void {
        this.olhosDaMorte++;
      }
    
      public atirar(Inimigo: Braithwaite): void {
        if ( this.podeAtirar() ){
          this.getMunicao().setQuantidade(this.getMunicao().getQuantidade() - 1);
          this.aumentarXP;
          Inimigo.sofrerDano();
        };
      };
    
      public getMunicao(): Item {
        return this.municao; 
      };
    
      public getArma(): Item {
        return this.arma;
      }
    
      public getOlhosDaMorte(): number {
        return this.olhosDaMorte;
    }
  };

