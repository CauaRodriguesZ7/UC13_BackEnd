class Animal {
    constructor(public nome: string){
    }

    fazerSom(): void {
        console.log("Som genérico de animal");
    }
}

class Cachorro extends Animal {
    latir(): void {
        console.log("Au Au!");
    }
}

class Gato extends Animal {
    fazerSom(): void {
        console.log("Miauuu!");
    }
}

const cat = new Gato("Mikey");
cat.fazerSom();

const dog = new Cachorro("Rex");
dog.latir();