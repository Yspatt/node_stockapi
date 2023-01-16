import { Either, left, right } from '@core/logic/Either'
import { WarehouseNotExistsError } from '@modules/warehouse/errors/WarehouseNotExistsError'
import { IWarehouseRepository } from '@modules/warehouse/repositories/IWarehouseRepository'
import { Warehouse } from '@prisma/client'

type IRequest = {
    name: string
    code: string
    default: boolean
    disregard: boolean
}

export class EditWarehouseUseCase {
    constructor(private warehouseRepository: IWarehouseRepository) {}

    async execute(params: IRequest): Promise<Either<Error, Warehouse>> {
        if (
            !params.name &&
            !params.code &&
            !params.default &&
            params.disregard
        ) {
            return left(new Error('Specify a valid deposit or update data.'))
        }

        if (
            !params.code ||
            !(await this.warehouseRepository.alreadyExists(params.code))
        ) {
            return left(new WarehouseNotExistsError())
        }

        const warehouse = await this.warehouseRepository.update(params.code, {
            defaultS: params.default,
            disregard: params.disregard,
            name: params.name,
        })

        return right(warehouse)
    }
}
