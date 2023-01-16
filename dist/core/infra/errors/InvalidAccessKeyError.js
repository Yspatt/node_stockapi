"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InvalidAccessKeyError = void 0;

class InvalidAccessKeyError extends Error {
  constructor() {
    super(`Invalid Access Key.`);
    this.name = 'InvalidAccessKeyError';
  }

}

exports.InvalidAccessKeyError = InvalidAccessKeyError;