import { PrismaWarehouseRepository } from '@modules/warehouse/repositories/prisma/PrismaWarehouseRepository'

const prismaWarehouseRepository = new PrismaWarehouseRepository()

export const WarehouseDefaultImplements = { prismaWarehouseRepository }
