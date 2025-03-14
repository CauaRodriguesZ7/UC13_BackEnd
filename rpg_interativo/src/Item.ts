export class Item {
 private descricao: string;
 private quantidade: number;

 constructor(descricao: string, quantidade: number){
    this.descricao = descricao;
    this.quantidade = quantidade;
 }

 public getDescricao(): string {
   return this.descricao;
 }

 public setDescricao(descricao: string): void {
   this.descricao = descricao;
 }

 public getQuantidade(): number {
   return this.quantidade;
 }

 public setQuantidade(quantidade: number): void {
   this.quantidade = quantidade;
 }
}