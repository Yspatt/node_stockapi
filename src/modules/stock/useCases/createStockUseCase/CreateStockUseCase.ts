import { IShelfRepository } from '@modules/shelf/repositories/IShelfRepository'
import { IStockRepository } from '@modules/stock/repositories/IStockRepository'
import { Stock } from '@prisma/client'

type IRequest = {
    sku: string
    stock: number
    shelf: string
    gtin: string
}

export class CreateStockUseCase {
    constructor(
        private stockRepository: IStockRepository,
        private shelfRepository: IShelfRepository
    ) {}

    async execute({
        sku,
        shelf,
        stock,
        gtin,
    }: IRequest): Promise<Stock | Error> {
        console.log(sku)
        console.log(shelf)
        console.log(gtin)
        console.log(stock)
        if (!shelf) {
            return new Error(`invalid shelf reference.`)
        }

        const containsShelf = await this.shelfRepository.getByReference(shelf)

        if (!containsShelf) {
            return new Error(`shelf ${shelf} doesnt exists.`)
        }

        if (await this.stockRepository.existsOnShelf(sku, shelf)) {
            return new Error(`sku ${sku} already exists on shelf ${shelf}.`)
        }

        if (!sku && !gtin) {
            return new Error(`Please enter a valid gtin or sku`)
        }

        const createStock = await this.stockRepository.createOrConneect(
            sku,
            stock,
            shelf,
            gtin
        )

        return createStock
    }
}
