export interface ProductModel {
    id: string
    sku: string
    name: string
    currentStock: number
    warehouses: [
        {
            id: string
            name: string
            currentStock: number
            disregard: boolean
            virtualStock: number
        }
    ]
}

export interface IERPProductProvider {
    normalize(raw: JSON): Promise<ProductModel>
}
