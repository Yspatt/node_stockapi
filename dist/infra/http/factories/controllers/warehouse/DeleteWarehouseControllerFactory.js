"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeDeleteWarehouseController = makeDeleteWarehouseController;

var _DeleteWarehouseController = require("../../../../../modules/warehouse/useCases/deleteWarehouseUseCase/DeleteWarehouseController");

var _DeleteWarehouseUseCase = require("../../../../../modules/warehouse/useCases/deleteWarehouseUseCase/DeleteWarehouseUseCase");

var _WarehouseDefaultImplements = require("./WarehouseDefaultImplements");

function makeDeleteWarehouseController() {
  const prismaWarehouseRepository = _WarehouseDefaultImplements.WarehouseDefaultImplements.prismaWarehouseRepository;
  const deleteWarehouseUseCase = new _DeleteWarehouseUseCase.DeleteWarehouseUseCase(prismaWarehouseRepository);
  const deleteWarehouseController = new _DeleteWarehouseController.DeleteWarehouseController(deleteWarehouseUseCase);
  return deleteWarehouseController;
}