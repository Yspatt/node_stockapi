import { Controller } from '@core/infra/Controller'
import {
    HttpResponse,
    fail,
    clientError,
    created,
    notFound,
    conflict,
} from '@core/infra/HttpResponse'
import { ShelfAlreadyExistsInSectorError } from '@modules/shelf/errors/ShelfAlreadyExistsInSectorError'
import { TargetWarehouseNotExistsError } from '@modules/shelf/errors/TargetWarehouseNotExistsError'

import { CreateShelfUseCase } from './CreateShelfUseCase'

type CreateShelfControllerRequest = {
    distance: number
    level: number
    sector: string
    warehouseCode: string
}

export class CreateShelfController implements Controller {
    constructor(private createShelfUseCase: CreateShelfUseCase) {}

    async handle({
        distance,
        level,
        sector,
        warehouseCode,
    }: CreateShelfControllerRequest): Promise<HttpResponse> {
        try {
            const result = await this.createShelfUseCase.execute({
                distance,
                level,
                sector,
                warehouseCode,
            })

            if (result.isLeft()) {
                if (result.value instanceof TargetWarehouseNotExistsError) {
                    return notFound(result.value)
                }

                if (result.value instanceof ShelfAlreadyExistsInSectorError) {
                    return conflict(result.value)
                }
            }

            if (result.isRight()) {
                if (!result.value) {
                    return clientError(new Error('Internal Client Error.'))
                } else {
                    return created(result.value)
                }
            }
        } catch (err) {
            return fail(err)
        }
    }
}
