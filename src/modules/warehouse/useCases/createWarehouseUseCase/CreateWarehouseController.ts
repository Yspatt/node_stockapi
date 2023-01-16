import { Controller } from '@core/infra/Controller'
import {
    HttpResponse,
    fail,
    clientError,
    created,
    conflict,
    missing,
} from '@core/infra/HttpResponse'
import { WarehouseAlreadyExistsError } from '@modules/warehouse/errors/WarehouseAlreadyExistsError'

import { CreateWarehouseUseCase } from './CreateWarehouseUseCase'

type CreateWarehouseControllerRequest = {
    name: string
    code: string
    default: boolean
    disregard: boolean
}

export class CreateWarehouseController implements Controller {
    constructor(private createWarehouseUseCase: CreateWarehouseUseCase) {}

    async handle(
        params: CreateWarehouseControllerRequest
    ): Promise<HttpResponse> {
        try {
            const result = await this.createWarehouseUseCase.execute({
                name: params.name,
                code: params.code,
                default: params.default,
                disregard: params.disregard,
            })

            if (result.isLeft()) {
                if (result.value instanceof WarehouseAlreadyExistsError) {
                    return conflict(result.value)
                } else {
                    return missing(result.value)
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
