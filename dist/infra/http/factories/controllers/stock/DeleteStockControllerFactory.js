"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeDeleteStockController = makeDeleteStockController;

var _PrismaStockRepository = require("../../../../../modules/stock/repositories/prisma/PrismaStockRepository");

var _DeleteStockController = require("../../../../../modules/stock/useCases/deleteStockUseCase/DeleteStockController");

var _DeleteStockUseCase = require("../../../../../modules/stock/useCases/deleteStockUseCase/DeleteStockUseCase");

var _ShelfDefaultImplements = require("../shelf/ShelfDefaultImplements");

function makeDeleteStockController() {
  const prismaStockRepository = new _PrismaStockRepository.PrismaStockRepository();
  const prismaShelfRepository = _ShelfDefaultImplements.ShelfDefaultImplements.prismaShelfRepository;
  const deleteStockUseCase = new _DeleteStockUseCase.DeleteStockUseCase(prismaStockRepository, prismaShelfRepository);
  const deleteStockController = new _DeleteStockController.DeleteStockController(deleteStockUseCase);
  return deleteStockController;
}