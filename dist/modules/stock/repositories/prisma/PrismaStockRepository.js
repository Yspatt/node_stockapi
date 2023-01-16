"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrismaStockRepository = void 0;

var _client = require("../../../../infra/prisma/client");

class PrismaStockRepository {
  async createOrConneect(sku, stock, shelf, gtin) {
    const stockModel = await _client.prisma.stock.create({
      data: {
        sku,
        stock,
        gtin: gtin ?? '',
        shelf: {
          connect: {
            reference: shelf
          }
        },
        Product: {
          connectOrCreate: {
            create: {
              sku,
              gtin
            },
            where: {
              sku
            }
          }
        }
      }
    });
    return stockModel;
  }

  async existsOnShelf(sku, shelf) {
    const existsOnShelf = await _client.prisma.stock.findFirst({
      where: {
        sku,
        shelf: {
          reference: shelf
        }
      }
    });
    console.log(!!existsOnShelf);
    return !!existsOnShelf;
  }

  async removeProduct(sku, shelf) {
    const deleteFromShelf = await _client.prisma.stock.findFirst({
      where: {
        shelf: {
          reference: shelf
        },
        AND: {
          sku
        }
      }
    });
    return deleteFromShelf;
  }

}

exports.PrismaStockRepository = PrismaStockRepository;