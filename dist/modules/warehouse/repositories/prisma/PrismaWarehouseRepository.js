"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrismaWarehouseRepository = void 0;

var _client = require("../../../../infra/prisma/client");

class PrismaWarehouseRepository {
  async create(params) {
    const warehouse = await _client.prisma.warehouse.create({
      data: {
        code: params.code,
        name: params.name,
        default: params.default,
        disregard: params.disregard
      }
    });
    return warehouse;
  }

  async alreadyExists(code) {
    return (await _client.prisma.warehouse.findFirst({
      where: {
        code
      }
    })) != null;
  }

  async delete(code) {
    const warehouse = await _client.prisma.warehouse.delete({
      where: {
        code
      }
    });
    return warehouse;
  }

  async update(code, {
    name,
    defaultS,
    disregard
  }) {
    const warehouse = await _client.prisma.warehouse.update({
      where: {
        code
      },
      data: {
        name,
        default: defaultS,
        disregard
      }
    });
    return warehouse;
  }

  async all() {
    const warehouses = await _client.prisma.warehouse.findMany();
    return warehouses;
  }

  async get(code) {
    const warehouse = await _client.prisma.warehouse.findUnique({
      where: {
        code
      },
      include: {
        shelf: true
      }
    });
    return warehouse;
  }

  async exists(id) {
    const warehouse = await _client.prisma.warehouse.findFirst({
      where: {
        id
      }
    });
    return warehouse != null;
  }

}

exports.PrismaWarehouseRepository = PrismaWarehouseRepository;