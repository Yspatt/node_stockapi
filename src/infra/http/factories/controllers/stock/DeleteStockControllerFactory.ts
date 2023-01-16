import { Controller } from '@core/infra/Controller'
import { PrismaStockRepository } from '@modules/stock/repositories/prisma/PrismaStockRepository'
import { DeleteStockController } from '@modules/stock/useCases/deleteStockUseCase/DeleteStockController'
import { DeleteStockUseCase } from '@modules/stock/useCases/deleteStockUseCase/DeleteStockUseCase'

import { ShelfDefaultImplements } from '../shelf/ShelfDefaultImplements'

export function makeDeleteStockController(): Controller {
    const prismaStockRepository = new PrismaStockRepository()
    const prismaShelfRepository = ShelfDefaultImplements.prismaShelfRepository
    const deleteStockUseCase = new DeleteStockUseCase(
        prismaStockRepository,
        prismaShelfRepository
    )
    const deleteStockController = new DeleteStockController(deleteStockUseCase)

    return deleteStockController
}
