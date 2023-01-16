import { Either, left, right } from '@core/logic/Either'
import { IShelfRepository } from '@modules/shelf/repositories/IShelfRepository'
import { SKUNotFoundError } from '@modules/stock/errors/SKUNotFoundError'
import { IStockRepository } from '@modules/stock/repositories/IStockRepository'
import { Stock } from '@prisma/client'

type IRequest = {
    sku: string
    reference: string
}

export class DeleteStockUseCase {
    constructor(
        private stockRepository: IStockRepository,
        private shelfRepository: IShelfRepository
    ) {}

    async execute({ reference, sku }: IRequest): Promise<Either<Error, Stock>> {
        if (!sku) {
            return left(new SKUNotFoundError(sku))
        }
        const checkIfShelfExists = await this.shelfRepository.getByReference(
            reference
        )

        if (!checkIfShelfExists) {
            return left(new Error('Shelf not exists.'))
        }

        const removeStock = await this.stockRepository.removeProduct(
            sku,
            reference
        )
        if (!removeStock) {
            return left(new Error('Could not find product in shelf.'))
        }

        return right(removeStock)
    }
}
