import { Controller } from '@core/infra/Controller'
import { HttpResponse, fail, ok, clientError } from '@core/infra/HttpResponse'

import { CreateStockUseCase } from './CreateStockUseCase'

type CreateStockControllerRequest = {
    sku: string
    gtin: string
    stock: number
    shelf: string
}

export class CreateStockController implements Controller {
    constructor(private createStockUseCase: CreateStockUseCase) {}

    async handle({
        shelf,
        sku,
        stock,
        gtin,
    }: CreateStockControllerRequest): Promise<HttpResponse> {
        try {
            const result = await this.createStockUseCase.execute({
                shelf,
                sku,
                stock,
                gtin,
            })

            if (result instanceof Error) {
                return fail(result)
            }

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
