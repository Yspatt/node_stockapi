import { prisma } from '@infra/prisma/client'
import { Warehouse } from '@prisma/client'

import {
    ICreateWarehouseParams,
    IUpdateWarehouseParams,
    IWarehouseRepository,
} from '../IWarehouseRepository'

export class PrismaWarehouseRepository implements IWarehouseRepository {
    async create(params: ICreateWarehouseParams): Promise<Warehouse> {
        const warehouse = await prisma.warehouse.create({
            data: {
                code: params.code,
                name: params.name,
                default: params.default,
                disregard: params.disregard,
            },
        })
        return warehouse
    }

    async alreadyExists(code: string): Promise<Boolean> {
        return (
            (await prisma.warehouse.findFirst({
                where: {
                    code,
                },
            })) != null
        )
    }

    async delete(code: string): Promise<Warehouse> {
        const warehouse = await prisma.warehouse.delete({
            where: {
                code,
            },
        })
        return warehouse
    }

    async update(
        code: string,
        { name, defaultS, disregard }: IUpdateWarehouseParams
    ) {
        const warehouse = await prisma.warehouse.update({
            where: {
                code,
            },
            data: {
                name,
                default: defaultS,
                disregard,
            },
        })
        return warehouse
    }

    async all(): Promise<Warehouse[]> {
        const warehouses = await prisma.warehouse.findMany()
        return warehouses
    }

    async get(code: string): Promise<Warehouse> {
        const warehouse = await prisma.warehouse.findUnique({
            where: {
                code,
            },
            include: {
                shelf: true,
            },
        })
        return warehouse
    }

    async exists(id: string): Promise<Boolean> {
        const warehouse = await prisma.warehouse.findFirst({
            where: {
                id,
            },
        })
        return warehouse != null
    }
}
