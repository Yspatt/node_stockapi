"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrismaShelfRepository = void 0;

var _client = require("../../../../infra/prisma/client");

class PrismaShelfRepository {
  async create({
    distance,
    level,
    sector,
    warehouse
  }) {
    const shelf = await _client.prisma.shelf.create({
      data: {
        distance,
        level,
        sector,
        reference: `${warehouse.code}-${sector}-${distance}-${level}`,
        warehouseId: warehouse.id
      }
    });
    return shelf;
  }

  async getByReference(reference) {
    const shelf = await _client.prisma.shelf.findUnique({
      where: {
        reference
      }
    });
    return shelf;
  }

  async delete(shelf) {
    const shelfRemove = await _client.prisma.shelf.delete({
      where: {
        id: shelf.id
      }
    });
    return shelfRemove;
  }

  async getShelfs({
    perPage,
    query,
    page
  }) {
    const queryPayload = {
      take: Number(perPage),
      skip: (page - 1) * perPage,
      where: {}
    };

    if (query) {
      queryPayload.where = {
        Warehouse: {
          code: {
            contains: query,
            mode: 'insensitive'
          }
        }
      };
    }

    const shelfs = await _client.prisma.shelf.findMany({ ...queryPayload,
      orderBy: {
        reference: 'asc'
      }
    });
    const estimatedCount = await _client.prisma.shelf.aggregate({
      _count: true,
      where: queryPayload.where
    });
    return {
      data: shelfs,
      totalCount: estimatedCount._count
    };
  }

  async getShelf(reference) {
    const shelf = await _client.prisma.shelf.findFirst({
      where: {
        reference
      },
      include: {
        Stock: true,
        Warehouse: true
      }
    });
    return shelf;
  }

  async exists(level, distance, sector, warehouse) {
    const shelf = await _client.prisma.shelf.findFirst({
      where: {
        distance,
        warehouseId: warehouse,
        level,
        sector
      }
    });
    return shelf != null;
  }

}

exports.PrismaShelfRepository = PrismaShelfRepository;