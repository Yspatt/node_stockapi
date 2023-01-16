import { Either, left, right } from '@core/logic/Either'
import { ShelfNotExistsError } from '@modules/shelf/errors/ShelfNotExistsError'
import { IShelfRepository } from '@modules/shelf/repositories/IShelfRepository'
import { Shelf } from '@prisma/client'

type IRequest = {
    reference: string
}

export class DeleteShelfUseCase {
    constructor(private shelfRepository: IShelfRepository) {}

    async execute({ reference }: IRequest): Promise<Either<Error, Shelf>> {
        if (!reference) {
            return left(new ShelfNotExistsError())
        }
        const shelf = await this.shelfRepository.getByReference(reference)

        if (!shelf) {
            return left(new ShelfNotExistsError())
        }

        const deleteShelf = await this.shelfRepository.delete(shelf)

        return right(deleteShelf)
    }
}
