import { PrismaShelfRepository } from '@modules/shelf/repositories/prisma/PrismaShelfRepository'

const prismaShelfRepository = new PrismaShelfRepository()

export const ShelfDefaultImplements = { prismaShelfRepository }
