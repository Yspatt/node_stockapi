import express from 'express'

import { adaptRoute } from '@core/infra/adapers/ExpressRouteAdapter'

import { makeViewPickingRouteController } from '../factories/controllers/picking/ViewPickingRouteControllerFactory'

const pickingRouter = express.Router()

pickingRouter.post('/get', adaptRoute(makeViewPickingRouteController()))

export { pickingRouter }
