"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.adaptProductRoute = void 0;

const adaptProductRoute = (controller, provider) => {
  return async (request, response, next) => {
    const requestData = { ...request.body,
      ...request.params,
      ...request.query
    };
    console.log(requestData);
    const httpResponse = await controller.handle(provider.normalize(requestData));

    if (httpResponse.statusCode === 200) {
      Object.assign(request.body, httpResponse.body);
      return request.body;
    } else {
      return response.status(httpResponse.statusCode).json({
        error: httpResponse.body.error
      });
    }
  };
};

exports.adaptProductRoute = adaptProductRoute;