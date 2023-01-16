"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeGetShelfsController = makeGetShelfsController;

var _GetShelfsController = require("../../../../../modules/shelf/useCases/getShelfsUseCase/GetShelfsController");

var _GetShelfsUseCase = require("../../../../../modules/shelf/useCases/getShelfsUseCase/GetShelfsUseCase");

var _ShelfDefaultImplements = require("./ShelfDefaultImplements");

function makeGetShelfsController() {
  const prismaShelfRepository = _ShelfDefaultImplements.ShelfDefaultImplements.prismaShelfRepository;
  const getShelfsUseCase = new _GetShelfsUseCase.GetShelfsUseCase(prismaShelfRepository);
  const getShelfsController = new _GetShelfsController.GetShelfsController(getShelfsUseCase);
  return getShelfsController;
}