import { Stock } from '@prisma/client'

export type StockResume = {
    sku: string
    name: string
    currentStock: Number
    virtualStock: Number
    blocked: boolean
    warehouses: string[]
}

export interface IStockRepository {
    createOrConneect(
        sku: string,
        stock: number,
        shelf: string,
        gtin: string
    ): Promise<Stock>
    existsOnShelf(sku: string, shelf: string): Promise<Boolean>

    removeProduct(sku: string, shelf: string): Promise<Stock>
}
