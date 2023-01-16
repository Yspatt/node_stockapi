import { Controller } from '@core/infra/Controller'
import { EditWarehouseController } from '@modules/warehouse/useCases/editWarehouseUseCase/EditWarehouseController'
import { EditWarehouseUseCase } from '@modules/warehouse/useCases/editWarehouseUseCase/EditWarehouseUseCase'

import { WarehouseDefaultImplements } from './WarehouseDefaultImplements'

export function makeEditWarehouseController(): Controller {
    const prismaWarehouseRepository =
        WarehouseDefaultImplements.prismaWarehouseRepository

    const editWarehouseUseCase = new EditWarehouseUseCase(
        prismaWarehouseRepository
    )
    const editWarehouseController = new EditWarehouseController(
        editWarehouseUseCase
    )

    return editWarehouseController
}
