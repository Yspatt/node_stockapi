import { Controller } from '@core/infra/Controller'
import { ListWarehouseController } from '@modules/warehouse/useCases/listWarehouseUseCase/ListWarehouseController'
import { ListWarehouseUseCase } from '@modules/warehouse/useCases/listWarehouseUseCase/ListWarehouseUseCase'

import { WarehouseDefaultImplements } from './WarehouseDefaultImplements'

export function makeListWarehouseController(): Controller {
    const prismaWarehouseRepository =
        WarehouseDefaultImplements.prismaWarehouseRepository

    const listWarehouseUseCase = new ListWarehouseUseCase(
        prismaWarehouseRepository
    )
    const listWarehouseController = new ListWarehouseController(
        listWarehouseUseCase
    )

    return listWarehouseController
}
