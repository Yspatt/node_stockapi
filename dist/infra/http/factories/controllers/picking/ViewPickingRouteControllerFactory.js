"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeViewPickingRouteController = makeViewPickingRouteController;

var _ViewPickingRouteController = require("../../../../../modules/picking/useCases/viewPickingRouteUseCase/ViewPickingRouteController");

var _ViewPickingRouteUseCase = require("../../../../../modules/picking/useCases/viewPickingRouteUseCase/ViewPickingRouteUseCase");

function makeViewPickingRouteController() {
  const viewPickingRouteUseCase = new _ViewPickingRouteUseCase.ViewPickingRouteUseCase();
  const viewPickingRouteController = new _ViewPickingRouteController.ViewPickingRouteController(viewPickingRouteUseCase);
  return viewPickingRouteController;
}