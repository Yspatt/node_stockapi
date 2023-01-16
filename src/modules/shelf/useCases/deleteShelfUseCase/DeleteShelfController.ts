import { Controller } from '@core/infra/Controller'
import {
    HttpResponse,
    fail,
    ok,
    clientError,
    notFound,
} from '@core/infra/HttpResponse'
import { ShelfNotExistsError } from '@modules/shelf/errors/ShelfNotExistsError'

import { DeleteShelfUseCase } from './DeleteShelfUseCase'

type DeleteShelfControllerRequest = {
    reference: string
}

export class DeleteShelfController implements Controller {
    constructor(private deleteShelfUseCase: DeleteShelfUseCase) {}

    async handle({
        reference,
    }: DeleteShelfControllerRequest): Promise<HttpResponse> {
        try {
            const result = await this.deleteShelfUseCase.execute({ reference })

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
