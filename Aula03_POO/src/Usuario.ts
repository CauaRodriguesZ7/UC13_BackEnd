interface IUsuario {
    nome: string;
    email: string;
    exibirInfo(): void;
}

class Usuario implements IUsuario {
    constructor(public nome: string, public email: string){
    }

    exibirInfo(): void {
        console.log(`Usuário: ${this.nome}, Email: ${this.email}`);
    }
}

const user = new Usuario("Cauã", "caua@gmail.com");
user.exibirInfo();