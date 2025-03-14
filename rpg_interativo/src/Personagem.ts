import { Status } from "./status";
import { Braithwaite } from "./Braithwaite";;
import { ArthurMorgan } from "./ArthurMorgan";

export class Personagem {
   protected nome: string;
   protected vida: number;
   protected status: Status;

    constructor(nome: string, vida: number, olhosDaMorte: number, statusInicial: Status = Status.Recem_Criado){
        this.nome = nome;
        this.status = Status.Recem_Criado;
        this.vida = 100.0
    };

    public getNome(): string {
        return this.nome;
      };

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getStatus(): Status {
        return this.status;
    }

    public getVida(): number {
        return this.vida;
    };
    
};
