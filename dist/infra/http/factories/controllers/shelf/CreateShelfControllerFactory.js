"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeCreateShelfController = makeCreateShelfController;

var _CreateShelfController = require("../../../../../modules/shelf/useCases/createShelfUseCase/CreateShelfController");

var _CreateShelfUseCase = require("../../../../../modules/shelf/useCases/createShelfUseCase/CreateShelfUseCase");

var _WarehouseDefaultImplements = require("../warehouse/WarehouseDefaultImplements");

var _ShelfDefaultImplements = require("./ShelfDefaultImplements");

function makeCreateShelfController() {
  const prismaWarehouseRepository = _WarehouseDefaultImplements.WarehouseDefaultImplements.prismaWarehouseRepository;
  const prismaShelfRepository = _ShelfDefaultImplements.ShelfDefaultImplements.prismaShelfRepository;
  const createShelfUseCase = new _CreateShelfUseCase.CreateShelfUseCase(prismaShelfRepository, prismaWarehouseRepository);
  const createShelfController = new _CreateShelfController.CreateShelfController(createShelfUseCase);
  return createShelfController;
}