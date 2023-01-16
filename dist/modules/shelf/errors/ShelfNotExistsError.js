"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShelfNotExistsError = void 0;

class ShelfNotExistsError extends Error {
  constructor() {
    super(`The request shelf doesn't exists`);
    this.name = 'ShelfNotExistsError';
  }

}

exports.ShelfNotExistsError = ShelfNotExistsError;