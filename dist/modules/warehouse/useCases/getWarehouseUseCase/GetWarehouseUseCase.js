"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetWarehouseUseCase = void 0;

var _Either = require("../../../../core/logic/Either");

var _WarehouseNotExistsError = require("../../errors/WarehouseNotExistsError");

class GetWarehouseUseCase {
  constructor(warehouseRepository) {
    this.warehouseRepository = warehouseRepository;
  }

  async execute({
    code
  }) {
    const warehouse = await this.warehouseRepository.get(code);

    if (!warehouse) {
      return (0, _Either.left)(new _WarehouseNotExistsError.WarehouseNotExistsError());
    }

    return (0, _Either.right)(warehouse);
  }

}

exports.GetWarehouseUseCase = GetWarehouseUseCase;