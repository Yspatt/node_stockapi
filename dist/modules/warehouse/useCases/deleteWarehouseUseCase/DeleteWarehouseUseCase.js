"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteWarehouseUseCase = void 0;

var _Either = require("../../../../core/logic/Either");

var _WarehouseNotExistsError = require("../../errors/WarehouseNotExistsError");

class DeleteWarehouseUseCase {
  constructor(warehouseRepository) {
    this.warehouseRepository = warehouseRepository;
  }

  async execute({
    code
  }) {
    if (!code || !(await this.warehouseRepository.alreadyExists(code))) {
      return (0, _Either.left)(new _WarehouseNotExistsError.WarehouseNotExistsError());
    }

    const warehouse = await this.warehouseRepository.delete(code);
    return (0, _Either.right)(warehouse);
  }

}

exports.DeleteWarehouseUseCase = DeleteWarehouseUseCase;