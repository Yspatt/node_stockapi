"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListWarehouseUseCase = void 0;

class ListWarehouseUseCase {
  constructor(warehouseRepository) {
    this.warehouseRepository = warehouseRepository;
  }

  async execute() {
    const warehouses = await this.warehouseRepository.all();
    return warehouses;
  }

}

exports.ListWarehouseUseCase = ListWarehouseUseCase;