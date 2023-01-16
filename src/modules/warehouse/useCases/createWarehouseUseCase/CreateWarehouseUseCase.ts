import { Either, left, right } from '@core/logic/Either'
import { WarehouseAlreadyExistsError } from '@modules/warehouse/errors/WarehouseAlreadyExistsError'
import { IWarehouseRepository } from '@modules/warehouse/repositories/IWarehouseRepository'
import { Warehouse } from '@prisma/client'

type IRequest = {
    name: string
    code: string
    default: boolean
    disregard: boolean
}

export class CreateWarehouseUseCase {
    constructor(private warehouseRepository: IWarehouseRepository) {}

    async execute(params: IRequest): Promise<Either<Error, Warehouse>> {
        if (!params.name || !params.code) {
            return left(new Error('Missing arguments (name | code)'))
        }

        if (await this.warehouseRepository.alreadyExists(params.code)) {
            return left(new WarehouseAlreadyExistsError())
        }

        const warehouse = await this.warehouseRepository.create({
            name: params.name,
            code: params.code,
            default: params.default ?? false,
            disregard: params.disregard ?? false,
        })

        return right(warehouse)
    }
}
