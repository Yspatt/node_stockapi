import { prisma } from '@infra/prisma/client'
import { Shelf } from '@prisma/client'

import {
    ICreateShelfParams,
    IShelfRepository,
    ShelfSearchParams,
    ShelfSearchResult,
} from '../IShelfRepository'

export class PrismaShelfRepository implements IShelfRepository {
    async create({
        distance,
        level,
        sector,
        warehouse,
    }: ICreateShelfParams): Promise<Shelf> {
        const shelf = await prisma.shelf.create({
            data: {
                distance,
                level,
                sector,
                reference: `${warehouse.code}-${sector}-${distance}-${level}`,
                warehouseId: warehouse.id,
            },
        })

        return shelf
    }

    async getByReference(reference: string): Promise<Shelf> {
        const shelf = await prisma.shelf.findUnique({
            where: {
                reference,
            },
        })
        return shelf
    }

    async delete(shelf: Shelf): Promise<Shelf> {
        const shelfRemove = await prisma.shelf.delete({
            where: {
                id: shelf.id,
            },
        })
        return shelfRemove
    }

    async getShelfs({
        perPage,
        query,
        page,
    }: ShelfSearchParams): Promise<ShelfSearchResult> {
        const queryPayload = {
            take: Number(perPage),
            skip: (page - 1) * perPage,
            where: {},
        }

        if (query) {
            queryPayload.where = {
                Warehouse: {
                    code: {
                        contains: query,
                        mode: 'insensitive',
                    },
                },
            }
        }

        const shelfs = await prisma.shelf.findMany({
            ...queryPayload,
            orderBy: {
                reference: 'asc',
            },
        })

        const estimatedCount = await prisma.shelf.aggregate({
            _count: true,
            where: queryPayload.where,
        })

        return {
            data: shelfs,
            totalCount: estimatedCount._count,
        }
    }

    async getShelf(reference: string): Promise<Shelf> {
        const shelf = await prisma.shelf.findFirst({
            where: {
                reference,
            },
            include: {
                Stock: true,
                Warehouse: true,
            },
        })
        return shelf
    }

    async exists(
        level: number,
        distance: number,
        sector: string,
        warehouse: string
    ): Promise<Boolean> {
        const shelf = await prisma.shelf.findFirst({
            where: {
                distance,
                warehouseId: warehouse,
                level,
                sector,
            },
        })
        return shelf != null
    }
}
