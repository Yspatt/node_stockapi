export class InvalidAccessKeyError extends Error {
    constructor() {
        super(`Invalid Access Key.`)
        this.name = 'InvalidAccessKeyError'
    }
}
