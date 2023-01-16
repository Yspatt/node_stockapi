"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeGetShelfController = makeGetShelfController;

var _GetShelfController = require("../../../../../modules/shelf/useCases/getShelfUseCase/GetShelfController");

var _GetShelfUseCase = require("../../../../../modules/shelf/useCases/getShelfUseCase/GetShelfUseCase");

var _ShelfDefaultImplements = require("./ShelfDefaultImplements");

function makeGetShelfController() {
  const prismaShelfRepository = _ShelfDefaultImplements.ShelfDefaultImplements.prismaShelfRepository;
  const getShelfUseCase = new _GetShelfUseCase.GetShelfUseCase(prismaShelfRepository);
  const getShelfController = new _GetShelfController.GetShelfController(getShelfUseCase);
  return getShelfController;
}