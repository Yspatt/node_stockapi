"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.adaptMiddleware = void 0;

const adaptMiddleware = middleware => {
  return async (request, response, next) => {
    const requestData = {
      shop_id: request.query?.key,
      ...(request.headers || {}),
      ...(request.body || {}),
      ...(request.params || {}),
      ...(request.query || {})
    };
    const httpResponse = await middleware.handle(requestData, request.body);

    if (httpResponse === false) {
      console.log('false');
      return response.status(200).send();
    }

    if (httpResponse.statusCode === 200) {
      console.log(httpResponse.body);
      Object.assign(request.body, httpResponse.body);
      return next();
    } else {
      return response.status(httpResponse.statusCode).json({
        error: httpResponse.body.error
      });
    }
  };
};

exports.adaptMiddleware = adaptMiddleware;