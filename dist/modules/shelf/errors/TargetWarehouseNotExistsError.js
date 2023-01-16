"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TargetWarehouseNotExistsError = void 0;

class TargetWarehouseNotExistsError extends Error {
  constructor() {
    super(`The requested warehouse doesn't exists`);
    this.name = 'TargetWarehouseNotExistsError';
  }

}

exports.TargetWarehouseNotExistsError = TargetWarehouseNotExistsError;