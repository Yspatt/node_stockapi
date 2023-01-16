import { Controller } from '@core/infra/Controller'
import { DeleteShelfController } from '@modules/shelf/useCases/deleteShelfUseCase/DeleteShelfController'
import { DeleteShelfUseCase } from '@modules/shelf/useCases/deleteShelfUseCase/DeleteShelfUseCase'

import { ShelfDefaultImplements } from './ShelfDefaultImplements'

export function makeDeleteShelfController(): Controller {
    const prismaShelfRepository = ShelfDefaultImplements.prismaShelfRepository
    const deleteShelfUseCase = new DeleteShelfUseCase(prismaShelfRepository)
    const deleteShelfController = new DeleteShelfController(deleteShelfUseCase)

    return deleteShelfController
}
