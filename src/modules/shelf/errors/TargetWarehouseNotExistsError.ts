export class TargetWarehouseNotExistsError extends Error {
    constructor() {
        super(`The requested warehouse doesn't exists`)
        this.name = 'TargetWarehouseNotExistsError'
    }
}
