"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteShelfUseCase = void 0;

var _Either = require("../../../../core/logic/Either");

var _ShelfNotExistsError = require("../../errors/ShelfNotExistsError");

class DeleteShelfUseCase {
  constructor(shelfRepository) {
    this.shelfRepository = shelfRepository;
  }

  async execute({
    reference
  }) {
    if (!reference) {
      return (0, _Either.left)(new _ShelfNotExistsError.ShelfNotExistsError());
    }

    const shelf = await this.shelfRepository.getByReference(reference);

    if (!shelf) {
      return (0, _Either.left)(new _ShelfNotExistsError.ShelfNotExistsError());
    }

    const deleteShelf = await this.shelfRepository.delete(shelf);
    return (0, _Either.right)(deleteShelf);
  }

}

exports.DeleteShelfUseCase = DeleteShelfUseCase;