import { Controller } from '@core/infra/Controller'
import { PrismaStockRepository } from '@modules/stock/repositories/prisma/PrismaStockRepository'
import { CreateStockController } from '@modules/stock/useCases/createStockUseCase/CreateStockController'
import { CreateStockUseCase } from '@modules/stock/useCases/createStockUseCase/CreateStockUseCase'

import { ShelfDefaultImplements } from '../shelf/ShelfDefaultImplements'

export function makeCreateStockController(): Controller {
    const prismaShelfRepository = ShelfDefaultImplements.prismaShelfRepository
    const prismaStockRepository = new PrismaStockRepository()
    const createStockUseCase = new CreateStockUseCase(
        prismaStockRepository,
        prismaShelfRepository
    )
    const createStockController = new CreateStockController(createStockUseCase)

    return createStockController
}
