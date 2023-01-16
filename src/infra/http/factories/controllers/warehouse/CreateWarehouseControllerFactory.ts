import { Controller } from '@core/infra/Controller'
import { CreateWarehouseController } from '@modules/warehouse/useCases/createWarehouseUseCase/CreateWarehouseController'
import { CreateWarehouseUseCase } from '@modules/warehouse/useCases/createWarehouseUseCase/CreateWarehouseUseCase'

import { WarehouseDefaultImplements } from './WarehouseDefaultImplements'

export function makeCreateWarehouseController(): Controller {
    const prismaWarehouseRepository =
        WarehouseDefaultImplements.prismaWarehouseRepository

    const createWarehouseUseCase = new CreateWarehouseUseCase(
        prismaWarehouseRepository
    )
    const createWarehouseController = new CreateWarehouseController(
        createWarehouseUseCase
    )

    return createWarehouseController
}
