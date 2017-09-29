const expect = require('chai').expect
const conta = require('../conta')
const assert = require('assert')

describe('Conta', () => {
   let conta1 = conta.conta1;
   let conta2 = conta.conta2;

  it('fazerTransferencia da conta1 deve diminuir o valor da conta1', function() {
    conta1.fazerTransferencia(conta2, 5);
    let novoSaldoConta1 = conta1.saldo;
    assert.equal(novoSaldoConta1, 15);
  })
  it('fazerTransferencia para a conta2 deve aumentar o valor da conta2', function() {
    let  novoSaldoConta2 = conta2.saldo;
    assert.equal(novoSaldoConta2, 35);
  })
  it('conta.historico deve atualizar quando há transferência', function() {
    assert.equal(conta1.historico, 'Histórico de transferências\nTransferência de 5 reais de Conta1 para Conta2');
  })
  it('fazerTransferencia com valor maior que saldo deve retornar mensagem de erro', function() {
    let mensagem = conta1.fazerTransferencia(conta2, 50);
    assert.equal(mensagem, "Saldo insuficiente");
  })
})
