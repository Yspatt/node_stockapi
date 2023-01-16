import { Request, Response, NextFunction } from 'express'

import { Middleware } from '@core/infra/Middleware'

export const adaptMiddleware = (middleware: Middleware) => {
    return async (request: Request, response: Response, next: NextFunction) => {
        const requestData = {
            shop_id: request.query?.key,
            ...(request.headers || {}),
            ...(request.body || {}),
            ...(request.params || {}),
            ...(request.query || {}),
        }

        const httpResponse = await middleware.handle(requestData, request.body)

        if (httpResponse === false) {
            console.log('false')
            return response.status(200).send()
        }

        if (httpResponse.statusCode === 200) {
            console.log(httpResponse.body)
            Object.assign(request.body, httpResponse.body)

            return next()
        } else {
            return response.status(httpResponse.statusCode).json({
                error: httpResponse.body.error,
            })
        }
    }
}
