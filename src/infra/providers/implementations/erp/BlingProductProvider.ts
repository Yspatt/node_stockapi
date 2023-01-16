/* eslint-disable dot-notation */
import {
    IERPProductProvider,
    ProductModel,
} from '@infra/providers/models/erp/IERPProductProvider'

export class BlingProductProvider implements IERPProductProvider {
    async normalize(raw: JSON): Promise<ProductModel> {
        const realData = raw['retorno']['estoques'][0].estoque
        const warehouses = realData['depositos'].map((data) => {
            return {
                id: data['deposito']['id'] + '',
                name: data['deposito']['nome'],
                currentStock: Number(data['deposito']['saldo']),
                disregard: !(data['deposito']['desconsiderar'] === 'N'),
                virtualStock: Number(data['deposito']['saldoVirtual']),
            }
        })

        const productModel: ProductModel = {
            id: realData['id'] + '',
            sku: realData['codigo'],
            name: realData['nome'],
            currentStock: Number(realData['estoqueAtual']),
            warehouses: warehouses,
        }

        return productModel
    }
}
