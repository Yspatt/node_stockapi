"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MissingParametersError = void 0;

class MissingParametersError extends Error {
  constructor() {
    super(`Parameters are missing in the request.`);
    this.name = 'MissingParametersError';
  }

}

exports.MissingParametersError = MissingParametersError;