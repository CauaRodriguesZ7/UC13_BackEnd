import * as readline from "readline";
import { Personagem } from "./Personagem";
import { ArthurMorgan } from "./ArthurMorgan";
import { JohnMarston } from "./JohnMarston";
import { Item } from "./Item";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Escolha seu personagem:");
console.log("1 - Arthur Morgan");
console.log("2 - John Marston");

rl.question("Digite o número do personagem: ", (resposta) => {
    let jogador: Personagem;
  
    if (resposta === "1") {
      jogador = new ArthurMorgan("Arthur Morgan", 100, 50);
    } else if (resposta === "2") {
      jogador = new JohnMarston("John Marston", 100, 40);
    } else {
      console.log("Opção inválida. Escolha 1 ou 2.");
      rl.close();
      return;
    }

    console.log(`Você escolheu: ${jogador.getNome()}`);
});

