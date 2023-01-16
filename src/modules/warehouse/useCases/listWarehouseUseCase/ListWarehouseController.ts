import { Controller } from '@core/infra/Controller'
import { HttpResponse, fail, ok, clientError } from '@core/infra/HttpResponse'

import { ListWarehouseUseCase } from './ListWarehouseUseCase'

export class ListWarehouseController implements Controller {
    constructor(private listWarehouseUseCase: ListWarehouseUseCase) {}

    async handle(): Promise<HttpResponse> {
        try {
            const result = await this.listWarehouseUseCase.execute()

            if (!result) {
                return clientError(new Error('Internal Client Error.'))
            } else {
                return ok(result)
            }
        } catch (err) {
            return fail(err)
        }
    }
}
