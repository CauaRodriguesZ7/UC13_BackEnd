import * as readline from "readline";
import { ArthurMorgan } from "./ArthurMorgan";
import { JohnMarston } from "./JohnMarston";
import { Status } from "./status";
import { Braithwaite } from "./Braithwaite";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Escolha seu personagem:");
console.log("1 - Arthur Morgan");
console.log("2 - John Marston");

rl.question("Digite o número do personagem: ", (resposta) => {
  
  let jogador: ArthurMorgan | JohnMarston;

  if (resposta === "1") {
    jogador = new ArthurMorgan("Arthur Morgan", 80, Status.Recem_Criado, 70);
    combate();
  } else if (resposta === "2") {
    jogador = new JohnMarston("John Marston", 80, Status.Recem_Criado, 50);
    combate()
  } else {
    console.log("Opção inválida. Escolha 1 ou 2.");
    rl.close();
    return;
  }

  function combate(){
    console.log(`\nVocê escolheu ${jogador.getNome()}, está armado com ${jogador.getArma().getDescricao()} e tem ${jogador.getMunicao().getQuantidade()} de Munição. \n`);
    console.log("Você entrou em combate com um Braithwaite:");

    const inimigo = new Braithwaite("Penélope", 25, Status.Recem_Criado);

    if (jogador instanceof JohnMarston) {
      jogador.atirar(inimigo);
      console.log(`${jogador.getNome()} atirou em ${}}`)
    } else if (jogador instanceof ArthurMorgan) {
      jogador.atirar(inimigo);
    }

  }

});


