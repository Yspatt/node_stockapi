import express from 'express'

import { adaptRoute } from '@core/infra/adapers/ExpressRouteAdapter'

import { makeCreateStockController } from '../factories/controllers/stock/CreateStockControllerFactory'
import { makeDeleteStockController } from '../factories/controllers/stock/DeleteStockControllerFactory'

const stockRouter = express.Router()

stockRouter.post('/create', adaptRoute(makeCreateStockController()))
stockRouter.delete('/remove', adaptRoute(makeDeleteStockController()))

export { stockRouter }
