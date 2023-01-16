"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pickingRouter = void 0;

var _express = _interopRequireDefault(require("express"));

var _ExpressRouteAdapter = require("../../../core/infra/adapers/ExpressRouteAdapter");

var _ViewPickingRouteControllerFactory = require("../factories/controllers/picking/ViewPickingRouteControllerFactory");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const pickingRouter = _express.default.Router();

exports.pickingRouter = pickingRouter;
pickingRouter.post('/get', (0, _ExpressRouteAdapter.adaptRoute)((0, _ViewPickingRouteControllerFactory.makeViewPickingRouteController)()));