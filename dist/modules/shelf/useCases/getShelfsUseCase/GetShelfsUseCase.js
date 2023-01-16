"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetShelfsUseCase = void 0;

class GetShelfsUseCase {
  constructor(shelfRepository) {
    this.shelfRepository = shelfRepository;
  }

  async execute({
    page,
    perPage,
    query
  }) {
    const shelfs = await this.shelfRepository.getShelfs({
      page: page ?? 1,
      perPage: perPage ?? 100,
      query
    });
    return shelfs;
  }

}

exports.GetShelfsUseCase = GetShelfsUseCase;