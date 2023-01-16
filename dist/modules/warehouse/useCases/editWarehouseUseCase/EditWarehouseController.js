"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditWarehouseController = void 0;

var _HttpResponse = require("../../../../core/infra/HttpResponse");

var _WarehouseNotExistsError = require("../../errors/WarehouseNotExistsError");

class EditWarehouseController {
  constructor(editWarehouseUseCase) {
    this.editWarehouseUseCase = editWarehouseUseCase;
  }

  async handle(params) {
    try {
      const result = await this.editWarehouseUseCase.execute({
        name: params.name,
        code: params.code,
        default: params.default,
        disregard: params.disregard
      });

      if (result.isLeft()) {
        if (result.value instanceof _WarehouseNotExistsError.WarehouseNotExistsError) {
          return (0, _HttpResponse.notFound)(result.value);
        } else {
          return (0, _HttpResponse.missing)(result.value);
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

exports.EditWarehouseController = EditWarehouseController;