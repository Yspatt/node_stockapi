"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WarehouseNotExistsError = void 0;

class WarehouseNotExistsError extends Error {
  constructor() {
    super(`The requested warehouse not exists.`);
    this.name = 'WarehouseNotExistsError';
  }

}

exports.WarehouseNotExistsError = WarehouseNotExistsError;