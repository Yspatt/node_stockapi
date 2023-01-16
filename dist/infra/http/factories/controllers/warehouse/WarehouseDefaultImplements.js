"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WarehouseDefaultImplements = void 0;

var _PrismaWarehouseRepository = require("../../../../../modules/warehouse/repositories/prisma/PrismaWarehouseRepository");

const prismaWarehouseRepository = new _PrismaWarehouseRepository.PrismaWarehouseRepository();
const WarehouseDefaultImplements = {
  prismaWarehouseRepository
};
exports.WarehouseDefaultImplements = WarehouseDefaultImplements;