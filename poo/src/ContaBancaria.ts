class contaBancaria {
    private saldo: number;

    constructor(saldoInicial: number) {
        this.saldo = saldoInicial;
    }

    depositar(valor: number) {
        this.saldo += valor;
    }

    consultarSaldo(): number {
        return this.saldo;
    }
}

const minhaConta = new contaBancaria(1000);
minhaConta.depositar(500);
console.log(minhaConta.consultarSaldo());