"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shelfRouter = void 0;

var _express = _interopRequireDefault(require("express"));

var _ExpressRouteAdapter = require("../../../core/infra/adapers/ExpressRouteAdapter");

var _CreateShelfControllerFactory = require("../factories/controllers/shelf/CreateShelfControllerFactory");

var _DeleteShelfControllerFactory = require("../factories/controllers/shelf/DeleteShelfControllerFactory");

var _GetShelfControllerFactory = require("../factories/controllers/shelf/GetShelfControllerFactory");

var _GetShelfsControllerFactory = require("../factories/controllers/shelf/GetShelfsControllerFactory");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const shelfRouter = _express.default.Router();

exports.shelfRouter = shelfRouter;
shelfRouter.get('/get/:reference', (0, _ExpressRouteAdapter.adaptRoute)((0, _GetShelfControllerFactory.makeGetShelfController)()));
shelfRouter.post('/create', (0, _ExpressRouteAdapter.adaptRoute)((0, _CreateShelfControllerFactory.makeCreateShelfController)()));
shelfRouter.delete('/delete', (0, _ExpressRouteAdapter.adaptRoute)((0, _DeleteShelfControllerFactory.makeDeleteShelfController)()));
shelfRouter.post('/list', (0, _ExpressRouteAdapter.adaptRoute)((0, _GetShelfsControllerFactory.makeGetShelfsController)()));