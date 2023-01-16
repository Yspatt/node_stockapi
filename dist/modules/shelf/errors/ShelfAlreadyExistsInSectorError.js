"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShelfAlreadyExistsInSectorError = void 0;

class ShelfAlreadyExistsInSectorError extends Error {
  constructor(sector) {
    super(`Already exists same shelf in the sector '${sector}'`);
    this.name = 'ShelfAlreadyExistsInSectorError';
  }

}

exports.ShelfAlreadyExistsInSectorError = ShelfAlreadyExistsInSectorError;