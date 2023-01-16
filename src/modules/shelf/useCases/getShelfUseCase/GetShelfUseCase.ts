import { Either, left, right } from '@core/logic/Either'
import { ShelfNotExistsError } from '@modules/shelf/errors/ShelfNotExistsError'
import { IShelfRepository } from '@modules/shelf/repositories/IShelfRepository'
import { Shelf } from '@prisma/client'

type IRequest = {
    reference: string
}

export class GetShelfUseCase {
    constructor(private shelfRepository: IShelfRepository) {}

    async execute({ reference }: IRequest): Promise<Either<Error, Shelf>> {
        const shelf = await this.shelfRepository.getShelf(reference)

        if (!shelf) {
            return left(new ShelfNotExistsError())
        }
        return right(shelf)
    }
}
