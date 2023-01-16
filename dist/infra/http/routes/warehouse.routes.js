"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.warehouseRouter = void 0;

var _express = _interopRequireDefault(require("express"));

var _ExpressRouteAdapter = require("../../../core/infra/adapers/ExpressRouteAdapter");

var _CreateWarehouseControllerFactory = require("../factories/controllers/warehouse/CreateWarehouseControllerFactory");

var _DeleteWarehouseControllerFactory = require("../factories/controllers/warehouse/DeleteWarehouseControllerFactory");

var _EditWarehouseControllerFactory = require("../factories/controllers/warehouse/EditWarehouseControllerFactory");

var _GetWarehouseControllerFactory = require("../factories/controllers/warehouse/GetWarehouseControllerFactory");

var _ListWarehouseControllerFactory = require("../factories/controllers/warehouse/ListWarehouseControllerFactory");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const warehouseRouter = _express.default.Router();

exports.warehouseRouter = warehouseRouter;
warehouseRouter.get('/', (0, _ExpressRouteAdapter.adaptRoute)((0, _ListWarehouseControllerFactory.makeListWarehouseController)()));
warehouseRouter.get('/get/:code', (0, _ExpressRouteAdapter.adaptRoute)((0, _GetWarehouseControllerFactory.makeGetWarehouseController)()));
warehouseRouter.post('/create', (0, _ExpressRouteAdapter.adaptRoute)((0, _CreateWarehouseControllerFactory.makeCreateWarehouseController)()));
warehouseRouter.delete('/delete', (0, _ExpressRouteAdapter.adaptRoute)((0, _DeleteWarehouseControllerFactory.makeDeleteWarehouseController)()));
warehouseRouter.put('/edit/:code', (0, _ExpressRouteAdapter.adaptRoute)((0, _EditWarehouseControllerFactory.makeEditWarehouseController)()));