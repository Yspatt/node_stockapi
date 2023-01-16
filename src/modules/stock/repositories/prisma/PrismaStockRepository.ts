import { prisma } from '@infra/prisma/client'
import { Stock } from '@prisma/client'

import { IStockRepository } from '../IStockRepository'

export class PrismaStockRepository implements IStockRepository {
    async createOrConneect(
        sku: string,
        stock: number,
        shelf: string,
        gtin: string
    ): Promise<Stock> {
        const stockModel = await prisma.stock.create({
            data: {
                sku,
                stock,
                gtin: gtin ?? '',
                shelf: {
                    connect: {
                        reference: shelf,
                    },
                },
                Product: {
                    connectOrCreate: {
                        create: {
                            sku,
                            gtin,
                        },
                        where: {
                            sku,
                        },
                    },
                },
            },
        })

        return stockModel
    }

    async existsOnShelf(sku: string, shelf: string): Promise<Boolean> {
        const existsOnShelf = await prisma.stock.findFirst({
            where: {
                sku,
                shelf: {
                    reference: shelf,
                },
            },
        })
        console.log(!!existsOnShelf)
        return !!existsOnShelf
    }

    async removeProduct(sku: string, shelf: string): Promise<Stock> {
        const deleteFromShelf = await prisma.stock.findFirst({
            where: {
                shelf: {
                    reference: shelf,
                },
                AND: {
                    sku,
                },
            },
        })

        return deleteFromShelf
    }
}
