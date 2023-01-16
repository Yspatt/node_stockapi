"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetWarehouseController = void 0;

var _HttpResponse = require("../../../../core/infra/HttpResponse");

var _WarehouseNotExistsError = require("../../errors/WarehouseNotExistsError");

class GetWarehouseController {
  constructor(getWarehouseUseCase) {
    this.getWarehouseUseCase = getWarehouseUseCase;
  }

  async handle({
    code
  }) {
    try {
      const result = await this.getWarehouseUseCase.execute({
        code
      });

      if (result.isLeft()) {
        if (result.value instanceof _WarehouseNotExistsError.WarehouseNotExistsError) {
          return (0, _HttpResponse.notFound)(result.value);
        }
      }

      if (result.isRight()) {
        if (!result.value) {
          return (0, _HttpResponse.clientError)(new Error('Internal Client Error.'));
        } else {
          return (0, _HttpResponse.ok)(result.value);
        }
      }
    } catch (err) {
      return (0, _HttpResponse.fail)(err);
    }
  }

}

exports.GetWarehouseController = GetWarehouseController;