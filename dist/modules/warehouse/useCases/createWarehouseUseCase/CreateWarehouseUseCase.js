"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateWarehouseUseCase = void 0;

var _Either = require("../../../../core/logic/Either");

var _WarehouseAlreadyExistsError = require("../../errors/WarehouseAlreadyExistsError");

class CreateWarehouseUseCase {
  constructor(warehouseRepository) {
    this.warehouseRepository = warehouseRepository;
  }

  async execute(params) {
    if (!params.name || !params.code) {
      return (0, _Either.left)(new Error('Missing arguments (name | code)'));
    }

    if (await this.warehouseRepository.alreadyExists(params.code)) {
      return (0, _Either.left)(new _WarehouseAlreadyExistsError.WarehouseAlreadyExistsError());
    }

    const warehouse = await this.warehouseRepository.create({
      name: params.name,
      code: params.code,
      default: params.default ?? false,
      disregard: params.disregard ?? false
    });
    return (0, _Either.right)(warehouse);
  }

}

exports.CreateWarehouseUseCase = CreateWarehouseUseCase;