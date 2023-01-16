export class WarehouseAlreadyExistsError extends Error {
    constructor() {
        super(`Warehouse already exists.`)
        this.name = 'WarehouseAlreadyExistsError'
    }
}
