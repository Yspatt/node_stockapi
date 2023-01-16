"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetShelfController = void 0;

var _HttpResponse = require("../../../../core/infra/HttpResponse");

var _ShelfNotExistsError = require("../../errors/ShelfNotExistsError");

class GetShelfController {
  constructor(getShelfUseCase) {
    this.getShelfUseCase = getShelfUseCase;
  }

  async handle({
    reference
  }) {
    try {
      const result = await this.getShelfUseCase.execute({
        reference
      });

      if (result.isLeft()) {
        if (result.value instanceof _ShelfNotExistsError.ShelfNotExistsError) {
          return (0, _HttpResponse.notFound)(result.value);
        }
      }

      if (result.isRight()) {
        if (!result.value) {
          return (0, _HttpResponse.clientError)(new Error('Internal Client Error.'));
        } else {
          return (0, _HttpResponse.ok)(result.value);
        }
      }
    } catch (err) {
      return (0, _HttpResponse.fail)(err);
    }
  }

}

exports.GetShelfController = GetShelfController;