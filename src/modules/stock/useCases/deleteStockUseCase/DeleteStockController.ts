import { Controller } from '@core/infra/Controller'
import { HttpResponse, fail, ok } from '@core/infra/HttpResponse'

import { DeleteStockUseCase } from './DeleteStockUseCase'

type DeleteStockControllerRequest = {
    sku: string
    reference: string
}

export class DeleteStockController implements Controller {
    constructor(private deleteStockUseCase: DeleteStockUseCase) {}

    async handle({
        sku,
        reference,
    }: DeleteStockControllerRequest): Promise<HttpResponse> {
        try {
            const result = await this.deleteStockUseCase.execute({
                reference,
                sku,
            })

            if (result.isLeft()) {
                return fail(result.value)
            } else {
                return ok(result.value)
            }
        } catch (err) {
            return fail(err)
        }
    }
}
