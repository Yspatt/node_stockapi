export class ShelfAlreadyExistsInSectorError extends Error {
    constructor(sector: string) {
        super(`Already exists same shelf in the sector '${sector}'`)
        this.name = 'ShelfAlreadyExistsInSectorError'
    }
}
