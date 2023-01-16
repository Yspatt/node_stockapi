import { Shelf, Warehouse } from '@prisma/client'

export type ICreateShelfParams = {
    distance: number
    level: number
    sector: string
    warehouse: Warehouse
}

export type ShelfSearchParams = {
    query?: string
    page: number
    perPage: number
}

export type ShelfSearchResult = {
    data: Shelf[]
    totalCount: number
}

export interface IShelfRepository {
    create(createShelfParams: ICreateShelfParams): Promise<Shelf>
    getByReference(reference: string): Promise<Shelf>
    delete(shelf: Shelf): Promise<Shelf>
    getShelf(reference: string): Promise<Shelf>
    getShelfs({
        query,
        page,
        perPage,
    }: ShelfSearchParams): Promise<ShelfSearchResult>
    exists(
        level: number,
        distance: number,
        sector: string,
        warehouse: string
    ): Promise<Boolean>
}
