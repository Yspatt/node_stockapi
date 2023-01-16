"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SKUNotFoundError = void 0;

class SKUNotFoundError extends Error {
  constructor(sku) {
    super(`The sku '${sku} not exists in the database.'`);
    this.name = 'SKUNotFoundError';
  }

}

exports.SKUNotFoundError = SKUNotFoundError;