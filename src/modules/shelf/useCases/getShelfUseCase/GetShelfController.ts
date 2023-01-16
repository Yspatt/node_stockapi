import { Controller } from '@core/infra/Controller'
import {
    HttpResponse,
    fail,
    ok,
    clientError,
    notFound,
} from '@core/infra/HttpResponse'
import { ShelfNotExistsError } from '@modules/shelf/errors/ShelfNotExistsError'

import { GetShelfUseCase } from './GetShelfUseCase'

type GetShelfControllerRequest = {
    reference: string
}

export class GetShelfController implements Controller {
    constructor(private getShelfUseCase: GetShelfUseCase) {}

    async handle({
        reference,
    }: GetShelfControllerRequest): Promise<HttpResponse> {
        try {
            const result = await this.getShelfUseCase.execute({ reference })

            if (result.isLeft()) {
                if (result.value instanceof ShelfNotExistsError) {
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
