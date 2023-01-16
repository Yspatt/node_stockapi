import { NextFunction, Request, Response } from 'express'

import { IERPProductProvider } from '@infra/providers/models/erp/IERPProductProvider'

import { Controller } from '../Controller'

export const adaptProductRoute = (
    controller: Controller,
    provider: IERPProductProvider
) => {
    return async (request: Request, response: Response, next: NextFunction) => {
        const requestData = {
            ...request.body,
            ...request.params,
            ...request.query,
        }
        console.log(requestData)

        const httpResponse = await controller.handle(
            provider.normalize(requestData)
        )

        if (httpResponse.statusCode === 200) {
            Object.assign(request.body, httpResponse.body)
            return request.body
        } else {
            return response.status(httpResponse.statusCode).json({
                error: httpResponse.body.error,
            })
        }
    }
}
