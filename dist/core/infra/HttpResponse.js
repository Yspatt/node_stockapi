"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clientError = clientError;
exports.conflict = conflict;
exports.created = created;
exports.fail = fail;
exports.forbidden = forbidden;
exports.missing = missing;
exports.notFound = notFound;
exports.ok = ok;
exports.tooMany = tooMany;
exports.unauthorized = unauthorized;

function ok(dto) {
  return {
    statusCode: 200,
    body: dto
  };
}

function created(dto) {
  return {
    statusCode: 201,
    body: dto
  };
}

function clientError(error) {
  return {
    statusCode: 400,
    body: {
      error: error.message
    }
  };
}

function unauthorized(error) {
  return {
    statusCode: 401,
    body: {
      error: error.message
    }
  };
}

function forbidden(error) {
  return {
    statusCode: 403,
    body: {
      error: error.message
    }
  };
}

function notFound(error) {
  return {
    statusCode: 404,
    body: {
      error: error.message
    }
  };
}

function conflict(error) {
  return {
    statusCode: 409,
    body: {
      error: error.message
    }
  };
}

function tooMany(error) {
  return {
    statusCode: 429,
    body: {
      error: error.message
    }
  };
}

function missing(error) {
  return {
    statusCode: 422,
    body: {
      error: error.message
    }
  };
}

function fail(error) {
  return {
    statusCode: 500,
    body: {
      error: error.message
    }
  };
}