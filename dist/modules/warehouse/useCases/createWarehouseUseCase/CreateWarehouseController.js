"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateWarehouseController = void 0;

var _HttpResponse = require("../../../../core/infra/HttpResponse");

var _WarehouseAlreadyExistsError = require("../../errors/WarehouseAlreadyExistsError");

class CreateWarehouseController {
  constructor(createWarehouseUseCase) {
    this.createWarehouseUseCase = createWarehouseUseCase;
  }

  async handle(params) {
    try {
      const result = await this.createWarehouseUseCase.execute({
        name: params.name,
        code: params.code,
        default: params.default,
        disregard: params.disregard
      });

      if (result.isLeft()) {
        if (result.value instanceof _WarehouseAlreadyExistsError.WarehouseAlreadyExistsError) {
          return (0, _HttpResponse.conflict)(result.value);
        } else {
          return (0, _HttpResponse.missing)(result.value);
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

exports.CreateWarehouseController = CreateWarehouseController;