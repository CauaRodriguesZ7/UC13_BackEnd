interface Inimigo {
    nome: string;
    vida: number;
    ataque: number;
    defesa: number;
    tipo: "bandido" | "caçador de recompensa" | "xerife";
    arma: "revólver" | "rifle" | "espingarda";
};
