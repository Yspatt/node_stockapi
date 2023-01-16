import { Controller } from '@core/infra/Controller'
import { DeleteWarehouseController } from '@modules/warehouse/useCases/deleteWarehouseUseCase/DeleteWarehouseController'
import { DeleteWarehouseUseCase } from '@modules/warehouse/useCases/deleteWarehouseUseCase/DeleteWarehouseUseCase'

import { WarehouseDefaultImplements } from './WarehouseDefaultImplements'

export function makeDeleteWarehouseController(): Controller {
    const prismaWarehouseRepository =
        WarehouseDefaultImplements.prismaWarehouseRepository

    const deleteWarehouseUseCase = new DeleteWarehouseUseCase(
        prismaWarehouseRepository
    )
    const deleteWarehouseController = new DeleteWarehouseController(
        deleteWarehouseUseCase
    )

    return deleteWarehouseController
}
