import { Controller } from '@core/infra/Controller'
import {
    HttpResponse,
    fail,
    ok,
    clientError,
    notFound,
    missing,
} from '@core/infra/HttpResponse'
import { WarehouseNotExistsError } from '@modules/warehouse/errors/WarehouseNotExistsError'

import { EditWarehouseUseCase } from './EditWarehouseUseCase'

type EditWarehouseControllerRequest = {
    name: string
    code: string
    default: boolean
    disregard: boolean
}

export class EditWarehouseController implements Controller {
    constructor(private editWarehouseUseCase: EditWarehouseUseCase) {}

    async handle(
        params: EditWarehouseControllerRequest
    ): Promise<HttpResponse> {
        try {
            const result = await this.editWarehouseUseCase.execute({
                name: params.name,
                code: params.code,
                default: params.default,
                disregard: params.disregard,
            })

            if (result.isLeft()) {
                if (result.value instanceof WarehouseNotExistsError) {
                    return notFound(result.value)
                } else {
                    return missing(result.value)
                }
            }

            if (result.isRight()) {
                if (!result.value) {
                    return clientError(new Error('Internal Client Error.'))
                } else {
                    return ok(result.value)
                }
            }
        } catch (err) {
            return fail(err)
        }
    }
}
