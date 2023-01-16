"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = void 0;

var _express = require("express");

var _picking = require("./picking.routes");

var _shelf = require("./shelf.routes");

var _stock = require("./stock.routes");

var _warehouse = require("./warehouse.routes");

const routes = (0, _express.Router)();
exports.routes = routes;
routes.use('/warehouse', _warehouse.warehouseRouter);
routes.use('/shelf', _shelf.shelfRouter);
routes.use('/stock', _stock.stockRouter);
routes.use('/picking', _picking.pickingRouter);