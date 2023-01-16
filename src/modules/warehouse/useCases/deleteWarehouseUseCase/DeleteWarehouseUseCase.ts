import { Either, left, right } from '@core/logic/Either'
import { WarehouseNotExistsError } from '@modules/warehouse/errors/WarehouseNotExistsError'
import { IWarehouseRepository } from '@modules/warehouse/repositories/IWarehouseRepository'
import { Warehouse } from '@prisma/client'

type IRequest = {
    code: string
}

export class DeleteWarehouseUseCase {
    constructor(private warehouseRepository: IWarehouseRepository) {}

    async execute({ code }: IRequest): Promise<Either<Error, Warehouse>> {
        if (!code || !(await this.warehouseRepository.alreadyExists(code))) {
            return left(new WarehouseNotExistsError())
        }

        const warehouse = await this.warehouseRepository.delete(code)

        return right(warehouse)
    }
}
