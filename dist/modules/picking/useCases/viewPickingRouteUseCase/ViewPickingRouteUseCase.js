"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ViewPickingRouteUseCase = void 0;

var _client = require("../../../../infra/prisma/client");

class ViewPickingRouteUseCase {
  constructor() {}

  async execute(params) {
    let result = [];

    for (const product of params.products) {
      const response = await _client.prisma.stock.findFirst({
        where: {
          sku: product.sku,
          stock: {
            gte: product.stock
          }
        },
        include: {
          shelf: true
        }
      });

      if (response) {
        result.push({
          product: product.sku,
          amount: product.stock,
          reference: response.shelf.reference,
          shelfAmount: response.stock
        });
        result = result.sort((a, b) => a.reference > b.reference ? 1 : -1);
      } else {
        const response = await _client.prisma.stock.findMany({
          where: {
            sku: product.sku
          },
          include: {
            shelf: true
          }
        });
        let required = 0;
        const found = [];
        response.forEach(element => {
          if (required < product.stock) {
            required += element.stock;
            found.push(element.shelf.reference);
          }
        });
        result.push({
          product: product.sku,
          amount: product.sku,
          reference: found,
          shelfAmount: required
        });
      }
    }

    return {
      products: result
    };
  }

}

exports.ViewPickingRouteUseCase = ViewPickingRouteUseCase;