"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeDeleteShelfController = makeDeleteShelfController;

var _DeleteShelfController = require("../../../../../modules/shelf/useCases/deleteShelfUseCase/DeleteShelfController");

var _DeleteShelfUseCase = require("../../../../../modules/shelf/useCases/deleteShelfUseCase/DeleteShelfUseCase");

var _ShelfDefaultImplements = require("./ShelfDefaultImplements");

function makeDeleteShelfController() {
  const prismaShelfRepository = _ShelfDefaultImplements.ShelfDefaultImplements.prismaShelfRepository;
  const deleteShelfUseCase = new _DeleteShelfUseCase.DeleteShelfUseCase(prismaShelfRepository);
  const deleteShelfController = new _DeleteShelfController.DeleteShelfController(deleteShelfUseCase);
  return deleteShelfController;
}