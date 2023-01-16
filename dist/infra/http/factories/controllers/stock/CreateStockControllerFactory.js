"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeCreateStockController = makeCreateStockController;

var _PrismaStockRepository = require("../../../../../modules/stock/repositories/prisma/PrismaStockRepository");

var _CreateStockController = require("../../../../../modules/stock/useCases/createStockUseCase/CreateStockController");

var _CreateStockUseCase = require("../../../../../modules/stock/useCases/createStockUseCase/CreateStockUseCase");

var _ShelfDefaultImplements = require("../shelf/ShelfDefaultImplements");

function makeCreateStockController() {
  const prismaShelfRepository = _ShelfDefaultImplements.ShelfDefaultImplements.prismaShelfRepository;
  const prismaStockRepository = new _PrismaStockRepository.PrismaStockRepository();
  const createStockUseCase = new _CreateStockUseCase.CreateStockUseCase(prismaStockRepository, prismaShelfRepository);
  const createStockController = new _CreateStockController.CreateStockController(createStockUseCase);
  return createStockController;
}