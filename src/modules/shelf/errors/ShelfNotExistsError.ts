export class ShelfNotExistsError extends Error {
    constructor() {
        super(`The request shelf doesn't exists`)
        this.name = 'ShelfNotExistsError'
    }
}
