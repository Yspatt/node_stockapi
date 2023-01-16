"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.adaptRoute = void 0;

const adaptRoute = controller => {
  return async (request, response) => {
    const requestData = { ...request.body,
      ...request.params,
      ...request.query
    };
    const httpResponse = await controller.handle(requestData);

    if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
      return response.status(httpResponse.statusCode).json(httpResponse.body);
    } else {
      return response.status(httpResponse.statusCode).json({
        error: httpResponse.body.error
      });
    }
  };
};

exports.adaptRoute = adaptRoute;