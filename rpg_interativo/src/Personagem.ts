class Personagem {
    nome: string;
    vida: number;
    forca: number;
    defesa: number;
    itens: string;

    constructor(nome: string, vida: number, forca: number, defesa: number, itens: string){
        this.nome = nome;
        this.vida = vida;
        this.forca = forca;
        this.defesa = defesa;
        this.itens = itens;
    };
};


class Elfo extends Personagem {

       tiroFantasma(): void {
        console.log("Dispara uma flecha etérea que ignora armaduras e atinge o alvo diretamente.");
    };
    
    passoSombrio(): void {
        console.log("Pode se mover rapidamente entre sombras, quase se tornando invisível.");
    };

    empatiaSelvagem(): void {
        console.log("Pode se comunicar e influenciar animais para ajudá-lo.");
    };
};

class Mago extends Personagem {

    chamaCelestial(): void {
        console.log("Conjura uma chama mística que incinera inimigos com um fogo que transcende o comum.");
    };

    barreiraArcana(): void {
        console.log("Ergue um escudo mágico que absorve e reflete ataques, protegendo aliados próximos.");
    };

    teletransporte(): void {
        console.log("Permite deslocar-se instantaneamente entre curtas distâncias, surpreendendo adversários ou escapando de situações críticas.");
    };
};

class Guerreiro extends Personagem {

    golpeDeJustica(): void {
        console.log("Executa um ataque preciso e devastador, capaz de romper as defesas inimigas com sua força bruta.");
    };

    posturaInabalavel(): void {
        console.log("Adota uma postura defensiva que minimiza os danos sofridos e protege os aliados próximos, atraindo a atenção dos adversários.");
    };

    furia(): void {
        console.log("Canaliza uma explosão de energia combativa, elevando seus golpes a níveis sobre-humanos por um breve período.");
    };
};