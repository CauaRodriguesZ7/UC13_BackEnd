import { Application } from "express";

class Produto {
    private id: number;
    private nome: string;
    private preco: number;

    constructor (id: number, nome: string, preco: number) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
    }
}

let produtos: Produto[] = [];

