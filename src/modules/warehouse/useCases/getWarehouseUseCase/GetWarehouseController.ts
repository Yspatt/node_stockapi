import { Controller } from '@core/infra/Controller'
import {
    HttpResponse,
    fail,
    ok,
    clientError,
    notFound,
} from '@core/infra/HttpResponse'
import { WarehouseNotExistsError } from '@modules/warehouse/errors/WarehouseNotExistsError'

import { GetWarehouseUseCase } from './GetWarehouseUseCase'

type GetWarehouseControllerRequest = {
    code: string
}

export class GetWarehouseController implements Controller {
    constructor(private getWarehouseUseCase: GetWarehouseUseCase) {}

    async handle({
        code,
    }: GetWarehouseControllerRequest): Promise<HttpResponse> {
        try {
            const result = await this.getWarehouseUseCase.execute({ code })

            if (result.isLeft()) {
                if (result.value instanceof WarehouseNotExistsError) {
                    return notFound(result.value)
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
