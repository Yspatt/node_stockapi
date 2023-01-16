"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateStockUseCase = void 0;

class CreateStockUseCase {
  constructor(stockRepository, shelfRepository) {
    this.stockRepository = stockRepository;
    this.shelfRepository = shelfRepository;
  }

  async execute({
    sku,
    shelf,
    stock,
    gtin
  }) {
    console.log(sku);
    console.log(shelf);
    console.log(gtin);
    console.log(stock);

    if (!shelf) {
      return new Error(`invalid shelf reference.`);
    }

    const containsShelf = await this.shelfRepository.getByReference(shelf);

    if (!containsShelf) {
      return new Error(`shelf ${shelf} doesnt exists.`);
    }

    if (await this.stockRepository.existsOnShelf(sku, shelf)) {
      return new Error(`sku ${sku} already exists on shelf ${shelf}.`);
    }

    if (!sku && !gtin) {
      return new Error(`Please enter a valid gtin or sku`);
    }

    const createStock = await this.stockRepository.createOrConneect(sku, stock, shelf, gtin);
    return createStock;
  }

}

exports.CreateStockUseCase = CreateStockUseCase;