export class WarehouseNotExistsError extends Error {
    constructor() {
        super(`The requested warehouse not exists.`)
        this.name = 'WarehouseNotExistsError'
    }
}
