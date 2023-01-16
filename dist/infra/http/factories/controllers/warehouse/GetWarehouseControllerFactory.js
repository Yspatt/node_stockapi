"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeGetWarehouseController = makeGetWarehouseController;

var _GetWarehouseController = require("../../../../../modules/warehouse/useCases/getWarehouseUseCase/GetWarehouseController");

var _GetWarehouseUseCase = require("../../../../../modules/warehouse/useCases/getWarehouseUseCase/GetWarehouseUseCase");

var _WarehouseDefaultImplements = require("./WarehouseDefaultImplements");

function makeGetWarehouseController() {
  const prismaWarehouseRepository = _WarehouseDefaultImplements.WarehouseDefaultImplements.prismaWarehouseRepository;
  const getWarehouseUseCase = new _GetWarehouseUseCase.GetWarehouseUseCase(prismaWarehouseRepository);
  const getWarehouseController = new _GetWarehouseController.GetWarehouseController(getWarehouseUseCase);
  return getWarehouseController;
}