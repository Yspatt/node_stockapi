"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetShelfsController = void 0;

var _HttpResponse = require("../../../../core/infra/HttpResponse");

class GetShelfsController {
  constructor(getShelfsUseCase) {
    this.getShelfsUseCase = getShelfsUseCase;
  }

  async handle({
    page,
    perPage,
    query
  }) {
    try {
      const result = await this.getShelfsUseCase.execute({
        perPage,
        page,
        query
      });

      if (!result) {
        return (0, _HttpResponse.clientError)(new Error('Internal Client Error.'));
      } else {
        return (0, _HttpResponse.ok)(result);
      }
    } catch (err) {
      return (0, _HttpResponse.fail)(err);
    }
  }

}

exports.GetShelfsController = GetShelfsController;