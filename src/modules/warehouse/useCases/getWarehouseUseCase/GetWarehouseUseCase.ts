import { Either, left, right } from '@core/logic/Either'
import { WarehouseNotExistsError } from '@modules/warehouse/errors/WarehouseNotExistsError'
import { IWarehouseRepository } from '@modules/warehouse/repositories/IWarehouseRepository'
import { Warehouse } from '@prisma/client'

type IRequest = {
    code: string
}

export class GetWarehouseUseCase {
    constructor(private warehouseRepository: IWarehouseRepository) {}

    async execute({ code }: IRequest): Promise<Either<Error, Warehouse>> {
        const warehouse = await this.warehouseRepository.get(code)
        if (!warehouse) {
            return left(new WarehouseNotExistsError())
        }

        return right(warehouse)
    }
}
