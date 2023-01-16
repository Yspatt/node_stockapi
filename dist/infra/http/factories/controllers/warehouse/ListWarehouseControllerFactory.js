"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeListWarehouseController = makeListWarehouseController;

var _ListWarehouseController = require("../../../../../modules/warehouse/useCases/listWarehouseUseCase/ListWarehouseController");

var _ListWarehouseUseCase = require("../../../../../modules/warehouse/useCases/listWarehouseUseCase/ListWarehouseUseCase");

var _WarehouseDefaultImplements = require("./WarehouseDefaultImplements");

function makeListWarehouseController() {
  const prismaWarehouseRepository = _WarehouseDefaultImplements.WarehouseDefaultImplements.prismaWarehouseRepository;
  const listWarehouseUseCase = new _ListWarehouseUseCase.ListWarehouseUseCase(prismaWarehouseRepository);
  const listWarehouseController = new _ListWarehouseController.ListWarehouseController(listWarehouseUseCase);
  return listWarehouseController;
}