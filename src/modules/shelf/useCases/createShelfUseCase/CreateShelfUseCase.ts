import { Either, left, right } from '@core/logic/Either'
import { ShelfAlreadyExistsInSectorError } from '@modules/shelf/errors/ShelfAlreadyExistsInSectorError'
import { TargetWarehouseNotExistsError } from '@modules/shelf/errors/TargetWarehouseNotExistsError'
import { IShelfRepository } from '@modules/shelf/repositories/IShelfRepository'
import { IWarehouseRepository } from '@modules/warehouse/repositories/IWarehouseRepository'
import { Shelf } from '@prisma/client'

type IRequest = {
    distance: number
    level: number
    sector: string
    warehouseCode: string
}

export class CreateShelfUseCase {
    constructor(
        private shelfRepository: IShelfRepository,
        private warehouseRepository: IWarehouseRepository
    ) {}

    async execute({
        distance,
        level,
        sector,
        warehouseCode,
    }: IRequest): Promise<Either<Error, Shelf>> {
        if (!sector) {
            return left(new Error('Invalid shelf sector'))
        }
        if (!distance) {
            return left(new Error('Invalid shelf distance'))
        }

        if (level < 0) {
            return left(new Error('Invalid shelf level'))
        }

        if (
            !warehouseCode ||
            !(await this.warehouseRepository.alreadyExists(warehouseCode))
        ) {
            return left(new TargetWarehouseNotExistsError())
        }

        const warehouse = await this.warehouseRepository.get(warehouseCode)

        if (
            await this.shelfRepository.exists(
                Number(level),
                Number(distance),
                sector,
                warehouse.id
            )
        ) {
            return left(new ShelfAlreadyExistsInSectorError(sector))
        }

        const shelf = await this.shelfRepository.create({
            distance: Number(distance),
            level: Number(level),
            sector,
            warehouse,
        })

        return right(shelf)
    }
}
