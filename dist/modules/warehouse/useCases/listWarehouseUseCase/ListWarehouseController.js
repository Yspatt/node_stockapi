"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListWarehouseController = void 0;

var _HttpResponse = require("../../../../core/infra/HttpResponse");

class ListWarehouseController {
  constructor(listWarehouseUseCase) {
    this.listWarehouseUseCase = listWarehouseUseCase;
  }

  async handle() {
    try {
      const result = await this.listWarehouseUseCase.execute();

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

exports.ListWarehouseController = ListWarehouseController;