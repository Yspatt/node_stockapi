import { Warehouse } from '@prisma/client'

export type ICreateWarehouseParams = {
    name: string
    code: string
    default: boolean
    disregard: boolean
}

export type IUpdateWarehouseParams = {
    name: string
    defaultS: boolean
    disregard: boolean
}

export interface IWarehouseRepository {
    create(createWarehouseParams: ICreateWarehouseParams): Promise<Warehouse>
    update(code: string, updateWarehouseParams: IUpdateWarehouseParams)
    delete(code: string): Promise<Warehouse>
    alreadyExists(code: string): Promise<Boolean>
    exists(id: string): Promise<Boolean>
    get(code: string): Promise<Warehouse>
    all(): Promise<Warehouse[]>
}
