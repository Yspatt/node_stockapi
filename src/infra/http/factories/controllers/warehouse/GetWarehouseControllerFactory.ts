import { Controller } from '@core/infra/Controller'
import { GetWarehouseController } from '@modules/warehouse/useCases/getWarehouseUseCase/GetWarehouseController'
import { GetWarehouseUseCase } from '@modules/warehouse/useCases/getWarehouseUseCase/GetWarehouseUseCase'

import { WarehouseDefaultImplements } from './WarehouseDefaultImplements'

export function makeGetWarehouseController(): Controller {
    const prismaWarehouseRepository =
        WarehouseDefaultImplements.prismaWarehouseRepository

    const getWarehouseUseCase = new GetWarehouseUseCase(
        prismaWarehouseRepository
    )
    const getWarehouseController = new GetWarehouseController(
        getWarehouseUseCase
    )

    return getWarehouseController
}
