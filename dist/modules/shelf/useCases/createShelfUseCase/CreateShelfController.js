"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateShelfController = void 0;

var _HttpResponse = require("../../../../core/infra/HttpResponse");

var _ShelfAlreadyExistsInSectorError = require("../../errors/ShelfAlreadyExistsInSectorError");

var _TargetWarehouseNotExistsError = require("../../errors/TargetWarehouseNotExistsError");

class CreateShelfController {
  constructor(createShelfUseCase) {
    this.createShelfUseCase = createShelfUseCase;
  }

  async handle({
    distance,
    level,
    sector,
    warehouseCode
  }) {
    try {
      const result = await this.createShelfUseCase.execute({
        distance,
        level,
        sector,
        warehouseCode
      });

      if (result.isLeft()) {
        if (result.value instanceof _TargetWarehouseNotExistsError.TargetWarehouseNotExistsError) {
          return (0, _HttpResponse.notFound)(result.value);
        }

        if (result.value instanceof _ShelfAlreadyExistsInSectorError.ShelfAlreadyExistsInSectorError) {
          return (0, _HttpResponse.conflict)(result.value);
        }
      }

      if (result.isRight()) {
        if (!result.value) {
          return (0, _HttpResponse.clientError)(new Error('Internal Client Error.'));
        } else {
          return (0, _HttpResponse.created)(result.value);
        }
      }
    } catch (err) {
      return (0, _HttpResponse.fail)(err);
    }
  }

}

exports.CreateShelfController = CreateShelfController;