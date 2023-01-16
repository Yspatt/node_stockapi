"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeEditWarehouseController = makeEditWarehouseController;

var _EditWarehouseController = require("../../../../../modules/warehouse/useCases/editWarehouseUseCase/EditWarehouseController");

var _EditWarehouseUseCase = require("../../../../../modules/warehouse/useCases/editWarehouseUseCase/EditWarehouseUseCase");

var _WarehouseDefaultImplements = require("./WarehouseDefaultImplements");

function makeEditWarehouseController() {
  const prismaWarehouseRepository = _WarehouseDefaultImplements.WarehouseDefaultImplements.prismaWarehouseRepository;
  const editWarehouseUseCase = new _EditWarehouseUseCase.EditWarehouseUseCase(prismaWarehouseRepository);
  const editWarehouseController = new _EditWarehouseController.EditWarehouseController(editWarehouseUseCase);
  return editWarehouseController;
}