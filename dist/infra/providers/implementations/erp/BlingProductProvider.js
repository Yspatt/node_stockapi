"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BlingProductProvider = void 0;

/* eslint-disable dot-notation */
class BlingProductProvider {
  async normalize(raw) {
    const realData = raw['retorno']['estoques'][0].estoque;
    const warehouses = realData['depositos'].map(data => {
      return {
        id: data['deposito']['id'] + '',
        name: data['deposito']['nome'],
        currentStock: Number(data['deposito']['saldo']),
        disregard: !(data['deposito']['desconsiderar'] === 'N'),
        virtualStock: Number(data['deposito']['saldoVirtual'])
      };
    });
    const productModel = {
      id: realData['id'] + '',
      sku: realData['codigo'],
      name: realData['nome'],
      currentStock: Number(realData['estoqueAtual']),
      warehouses: warehouses
    };
    return productModel;
  }

}

exports.BlingProductProvider = BlingProductProvider;