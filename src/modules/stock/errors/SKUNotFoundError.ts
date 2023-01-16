export class SKUNotFoundError extends Error {
    constructor(sku: string) {
        super(`The sku '${sku} not exists in the database.'`)
        this.name = 'SKUNotFoundError'
    }
}
