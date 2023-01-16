export class MissingParametersError extends Error {
    constructor() {
        super(`Parameters are missing in the request.`)
        this.name = 'MissingParametersError'
    }
}
