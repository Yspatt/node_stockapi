import { Controller } from '@core/infra/Controller'
import { HttpResponse, fail, ok, clientError } from '@core/infra/HttpResponse'
import { ShelfSearchParams } from '@modules/shelf/repositories/IShelfRepository'

import { GetShelfsUseCase } from './GetShelfsUseCase'

type GetShelfsControllerRequest = ShelfSearchParams

export class GetShelfsController implements Controller {
    constructor(private getShelfsUseCase: GetShelfsUseCase) {}

    async handle({
        page,
        perPage,
        query,
    }: GetShelfsControllerRequest): Promise<HttpResponse> {
        try {
            const result = await this.getShelfsUseCase.execute({
                perPage,
                page,
                query,
            })

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
