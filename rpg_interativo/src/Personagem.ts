export class Personagem {
   protected nome: string;
   protected vida: number = 100;
   protected olhosDaMorte: number;

    constructor(nome: string, vida: number, olhosDaMorte: number){
        this.nome = nome;
        this.vida = vida;
        this.olhosDaMorte = olhosDaMorte;
    };

    public getNome(): string {
        return this.getNome();
      };

    public getVida(): number {
        return this.vida;
    };

    public setVida(vida: number): void {
        this.vida = vida;
    };

    public getOlhosDaMorte(): number {
        return this.getOlhosDaMorte();
    };

    public setOlhosDaMorte(olhosDaMorte: number): void {
        this.olhosDaMorte = olhosDaMorte;
    };
};
