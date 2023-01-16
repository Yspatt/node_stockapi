"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteStockController = void 0;

var _HttpResponse = require("../../../../core/infra/HttpResponse");

class DeleteStockController {
  constructor(deleteStockUseCase) {
    this.deleteStockUseCase = deleteStockUseCase;
  }

  async handle({
    sku,
    reference
  }) {
    try {
      const result = await this.deleteStockUseCase.execute({
        reference,
        sku
      });

      if (result.isLeft()) {
        return (0, _HttpResponse.fail)(result.value);
      } else {
        return (0, _HttpResponse.ok)(result.value);
      }
    } catch (err) {
      return (0, _HttpResponse.fail)(err);
    }
  }

}

exports.DeleteStockController = DeleteStockController;