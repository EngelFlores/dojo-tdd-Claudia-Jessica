class Conta {
  constructor(saldo, nome) {
    this.saldo = saldo;
    this.nome = nome;
    this.historico = 'Histórico de transferências\n';
  }

  fazerTransferencia(contaTransferencia, valor) {
    if (valor > this.saldo) return 'Saldo insuficiente';
    this.saldo -= valor;
    contaTransferencia.saldo += valor;
    atualizaHistorico(this, contaTransferencia, valor);
  }
}

function atualizaHistorico(conta, contaTransferencia, valor) {
  conta.historico += 'Transferência de ' + valor + ' reais de ' + conta.nome + ' para '+ contaTransferencia.nome;
}

let conta1 = new Conta(20, 'Conta1');
let conta2 = new Conta(30, 'Conta2');

console.log(conta1.historico);

module.exports = { conta1, conta2 }
