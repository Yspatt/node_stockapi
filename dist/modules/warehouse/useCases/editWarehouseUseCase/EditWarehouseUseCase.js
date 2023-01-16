"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditWarehouseUseCase = void 0;

var _Either = require("../../../../core/logic/Either");

var _WarehouseNotExistsError = require("../../errors/WarehouseNotExistsError");

class EditWarehouseUseCase {
  constructor(warehouseRepository) {
    this.warehouseRepository = warehouseRepository;
  }

  async execute(params) {
    if (!params.name && !params.code && !params.default && params.disregard) {
      return (0, _Either.left)(new Error('Specify a valid deposit or update data.'));
    }

    if (!params.code || !(await this.warehouseRepository.alreadyExists(params.code))) {
      return (0, _Either.left)(new _WarehouseNotExistsError.WarehouseNotExistsError());
    }

    const warehouse = await this.warehouseRepository.update(params.code, {
      defaultS: params.default,
      disregard: params.disregard,
      name: params.name
    });
    return (0, _Either.right)(warehouse);
  }

}

exports.EditWarehouseUseCase = EditWarehouseUseCase;