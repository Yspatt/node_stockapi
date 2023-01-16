"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WarehouseAlreadyExistsError = void 0;

class WarehouseAlreadyExistsError extends Error {
  constructor() {
    super(`Warehouse already exists.`);
    this.name = 'WarehouseAlreadyExistsError';
  }

}

exports.WarehouseAlreadyExistsError = WarehouseAlreadyExistsError;