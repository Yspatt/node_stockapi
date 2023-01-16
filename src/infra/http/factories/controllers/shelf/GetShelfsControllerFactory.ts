import { Controller } from '@core/infra/Controller'
import { GetShelfsController } from '@modules/shelf/useCases/getShelfsUseCase/GetShelfsController'
import { GetShelfsUseCase } from '@modules/shelf/useCases/getShelfsUseCase/GetShelfsUseCase'

import { ShelfDefaultImplements } from './ShelfDefaultImplements'

export function makeGetShelfsController(): Controller {
    const prismaShelfRepository = ShelfDefaultImplements.prismaShelfRepository
    const getShelfsUseCase = new GetShelfsUseCase(prismaShelfRepository)
    const getShelfsController = new GetShelfsController(getShelfsUseCase)

    return getShelfsController
}
