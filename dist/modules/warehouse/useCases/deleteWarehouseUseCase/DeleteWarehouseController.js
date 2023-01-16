"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteWarehouseController = void 0;

var _HttpResponse = require("../../../../core/infra/HttpResponse");

var _WarehouseNotExistsError = require("../../errors/WarehouseNotExistsError");

class DeleteWarehouseController {
  constructor(deleteWarehouseUseCase) {
    this.deleteWarehouseUseCase = deleteWarehouseUseCase;
  }

  async handle({
    code
  }) {
    try {
      const result = await this.deleteWarehouseUseCase.execute({
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

exports.DeleteWarehouseController = DeleteWarehouseController;