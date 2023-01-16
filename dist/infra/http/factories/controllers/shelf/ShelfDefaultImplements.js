"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShelfDefaultImplements = void 0;

var _PrismaShelfRepository = require("../../../../../modules/shelf/repositories/prisma/PrismaShelfRepository");

const prismaShelfRepository = new _PrismaShelfRepository.PrismaShelfRepository();
const ShelfDefaultImplements = {
  prismaShelfRepository
};
exports.ShelfDefaultImplements = ShelfDefaultImplements;