import { Controller } from '@core/infra/Controller'
import { HttpResponse, fail, ok, clientError } from '@core/infra/HttpResponse'

import { ViewPickingRouteUseCase } from './ViewPickingRouteUseCase'

type ViewPickingRouteControllerRequest = {
    products: [
        {
            sku: string
            stock: number
        }
    ]
}

export class ViewPickingRouteController implements Controller {
    constructor(private viewPickingRouteUseCase: ViewPickingRouteUseCase) {}

    async handle(
        products: ViewPickingRouteControllerRequest
    ): Promise<HttpResponse> {
        try {
            const result = await this.viewPickingRouteUseCase.execute(products)

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
