class Pessoa {
    nome: string;
    idade: number;

    constructor (nome: string, idade: number){
        this.nome = nome;
        this.idade = idade;
    }

    apresentar(): string {
        return `Olá meu nome é ${this.nome}, e eu tenho ${this.idade} anos!`;
    }
}

const pessoa1 = new Pessoa("Cauã", 18);
console.log(pessoa1.apresentar());