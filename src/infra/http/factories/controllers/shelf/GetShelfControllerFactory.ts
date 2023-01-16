import { Controller } from '@core/infra/Controller'
import { GetShelfController } from '@modules/shelf/useCases/getShelfUseCase/GetShelfController'
import { GetShelfUseCase } from '@modules/shelf/useCases/getShelfUseCase/GetShelfUseCase'

import { ShelfDefaultImplements } from './ShelfDefaultImplements'

export function makeGetShelfController(): Controller {
    const prismaShelfRepository = ShelfDefaultImplements.prismaShelfRepository
    const getShelfUseCase = new GetShelfUseCase(prismaShelfRepository)
    const getShelfController = new GetShelfController(getShelfUseCase)

    return getShelfController
}
