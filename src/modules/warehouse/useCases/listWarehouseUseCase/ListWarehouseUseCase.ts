import { IWarehouseRepository } from '@modules/warehouse/repositories/IWarehouseRepository'
import { Warehouse } from '@prisma/client'

export class ListWarehouseUseCase {
    constructor(private warehouseRepository: IWarehouseRepository) {}

    async execute(): Promise<Warehouse[]> {
        const warehouses = await this.warehouseRepository.all()
        return warehouses
    }
}
