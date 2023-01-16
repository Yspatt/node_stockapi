"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ViewPickingRouteController = void 0;

var _HttpResponse = require("../../../../core/infra/HttpResponse");

class ViewPickingRouteController {
  constructor(viewPickingRouteUseCase) {
    this.viewPickingRouteUseCase = viewPickingRouteUseCase;
  }

  async handle(products) {
    try {
      const result = await this.viewPickingRouteUseCase.execute(products);

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

exports.ViewPickingRouteController = ViewPickingRouteController;