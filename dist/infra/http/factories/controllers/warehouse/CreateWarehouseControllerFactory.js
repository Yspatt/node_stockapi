"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeCreateWarehouseController = makeCreateWarehouseController;

var _CreateWarehouseController = require("../../../../../modules/warehouse/useCases/createWarehouseUseCase/CreateWarehouseController");

var _CreateWarehouseUseCase = require("../../../../../modules/warehouse/useCases/createWarehouseUseCase/CreateWarehouseUseCase");

var _WarehouseDefaultImplements = require("./WarehouseDefaultImplements");

function makeCreateWarehouseController() {
  const prismaWarehouseRepository = _WarehouseDefaultImplements.WarehouseDefaultImplements.prismaWarehouseRepository;
  const createWarehouseUseCase = new _CreateWarehouseUseCase.CreateWarehouseUseCase(prismaWarehouseRepository);
  const createWarehouseController = new _CreateWarehouseController.CreateWarehouseController(createWarehouseUseCase);
  return createWarehouseController;
}