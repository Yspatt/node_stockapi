"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteStockUseCase = void 0;

var _Either = require("../../../../core/logic/Either");

var _SKUNotFoundError = require("../../errors/SKUNotFoundError");

class DeleteStockUseCase {
  constructor(stockRepository, shelfRepository) {
    this.stockRepository = stockRepository;
    this.shelfRepository = shelfRepository;
  }

  async execute({
    reference,
    sku
  }) {
    if (!sku) {
      return (0, _Either.left)(new _SKUNotFoundError.SKUNotFoundError(sku));
    }

    const checkIfShelfExists = await this.shelfRepository.getByReference(reference);

    if (!checkIfShelfExists) {
      return (0, _Either.left)(new Error('Shelf not exists.'));
    }

    const removeStock = await this.stockRepository.removeProduct(sku, reference);

    if (!removeStock) {
      return (0, _Either.left)(new Error('Could not find product in shelf.'));
    }

    return (0, _Either.right)(removeStock);
  }

}

exports.DeleteStockUseCase = DeleteStockUseCase;