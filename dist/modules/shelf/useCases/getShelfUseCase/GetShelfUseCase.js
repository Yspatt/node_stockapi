"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetShelfUseCase = void 0;

var _Either = require("../../../../core/logic/Either");

var _ShelfNotExistsError = require("../../errors/ShelfNotExistsError");

class GetShelfUseCase {
  constructor(shelfRepository) {
    this.shelfRepository = shelfRepository;
  }

  async execute({
    reference
  }) {
    const shelf = await this.shelfRepository.getShelf(reference);

    if (!shelf) {
      return (0, _Either.left)(new _ShelfNotExistsError.ShelfNotExistsError());
    }

    return (0, _Either.right)(shelf);
  }

}

exports.GetShelfUseCase = GetShelfUseCase;