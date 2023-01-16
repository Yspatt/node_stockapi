import { Controller } from '@core/infra/Controller'
import { CreateShelfController } from '@modules/shelf/useCases/createShelfUseCase/CreateShelfController'
import { CreateShelfUseCase } from '@modules/shelf/useCases/createShelfUseCase/CreateShelfUseCase'

import { WarehouseDefaultImplements } from '../warehouse/WarehouseDefaultImplements'
import { ShelfDefaultImplements } from './ShelfDefaultImplements'

export function makeCreateShelfController(): Controller {
    const prismaWarehouseRepository =
        WarehouseDefaultImplements.prismaWarehouseRepository
    const prismaShelfRepository = ShelfDefaultImplements.prismaShelfRepository

    const createShelfUseCase = new CreateShelfUseCase(
        prismaShelfRepository,
        prismaWarehouseRepository
    )
    const createShelfController = new CreateShelfController(createShelfUseCase)

    return createShelfController
}
