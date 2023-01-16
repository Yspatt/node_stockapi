"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stockRouter = void 0;

var _express = _interopRequireDefault(require("express"));

var _ExpressRouteAdapter = require("../../../core/infra/adapers/ExpressRouteAdapter");

var _CreateStockControllerFactory = require("../factories/controllers/stock/CreateStockControllerFactory");

var _DeleteStockControllerFactory = require("../factories/controllers/stock/DeleteStockControllerFactory");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const stockRouter = _express.default.Router();

exports.stockRouter = stockRouter;
stockRouter.post('/create', (0, _ExpressRouteAdapter.adaptRoute)((0, _CreateStockControllerFactory.makeCreateStockController)()));
stockRouter.delete('/remove', (0, _ExpressRouteAdapter.adaptRoute)((0, _DeleteStockControllerFactory.makeDeleteStockController)()));