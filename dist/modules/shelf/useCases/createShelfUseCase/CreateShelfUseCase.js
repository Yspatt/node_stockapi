"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateShelfUseCase = void 0;

var _Either = require("../../../../core/logic/Either");

var _ShelfAlreadyExistsInSectorError = require("../../errors/ShelfAlreadyExistsInSectorError");

var _TargetWarehouseNotExistsError = require("../../errors/TargetWarehouseNotExistsError");

class CreateShelfUseCase {
  constructor(shelfRepository, warehouseRepository) {
    this.shelfRepository = shelfRepository;
    this.warehouseRepository = warehouseRepository;
  }

  async execute({
    distance,
    level,
    sector,
    warehouseCode
  }) {
    if (!sector) {
      return (0, _Either.left)(new Error('Invalid shelf sector'));
    }

    if (!distance) {
      return (0, _Either.left)(new Error('Invalid shelf distance'));
    }

    if (level < 0) {
      return (0, _Either.left)(new Error('Invalid shelf level'));
    }

    if (!warehouseCode || !(await this.warehouseRepository.alreadyExists(warehouseCode))) {
      return (0, _Either.left)(new _TargetWarehouseNotExistsError.TargetWarehouseNotExistsError());
    }

    const warehouse = await this.warehouseRepository.get(warehouseCode);

    if (await this.shelfRepository.exists(Number(level), Number(distance), sector, warehouse.id)) {
      return (0, _Either.left)(new _ShelfAlreadyExistsInSectorError.ShelfAlreadyExistsInSectorError(sector));
    }

    const shelf = await this.shelfRepository.create({
      distance: Number(distance),
      level: Number(level),
      sector,
      warehouse
    });
    return (0, _Either.right)(shelf);
  }

}

exports.CreateShelfUseCase = CreateShelfUseCase;