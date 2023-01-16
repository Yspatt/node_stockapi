"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateStockController = void 0;

var _HttpResponse = require("../../../../core/infra/HttpResponse");

class CreateStockController {
  constructor(createStockUseCase) {
    this.createStockUseCase = createStockUseCase;
  }

  async handle({
    shelf,
    sku,
    stock,
    gtin
  }) {
    try {
      const result = await this.createStockUseCase.execute({
        shelf,
        sku,
        stock,
        gtin
      });

      if (result instanceof Error) {
        return (0, _HttpResponse.fail)(result);
      }

      if (!result) {
        return (0, _HttpResponse.clientError)(new Error('Internal Client Error.'));
      } else {
        return (0, _HttpResponse.ok)(result);
      }
    } catch (err) {
      return (0, _HttpResponse.fail)(err);
    }
  }

}

exports.CreateStockController = CreateStockController;