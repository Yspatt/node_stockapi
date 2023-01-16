import { Controller } from '@core/infra/Controller'
import {
    HttpResponse,
    fail,
    ok,
    clientError,
    notFound,
} from '@core/infra/HttpResponse'
import { WarehouseNotExistsError } from '@modules/warehouse/errors/WarehouseNotExistsError'

import { DeleteWarehouseUseCase } from './DeleteWarehouseUseCase'

type DeleteWarehouseControllerRequest = {
    code: string
}

export class DeleteWarehouseController implements Controller {
    constructor(private deleteWarehouseUseCase: DeleteWarehouseUseCase) {}

    async handle({
        code,
    }: DeleteWarehouseControllerRequest): Promise<HttpResponse> {
        try {
            const result = await this.deleteWarehouseUseCase.execute({ code })

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
