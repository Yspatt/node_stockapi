import express from 'express'

import { adaptRoute } from '@core/infra/adapers/ExpressRouteAdapter'

import { makeCreateWarehouseController } from '../factories/controllers/warehouse/CreateWarehouseControllerFactory'
import { makeDeleteWarehouseController } from '../factories/controllers/warehouse/DeleteWarehouseControllerFactory'
import { makeEditWarehouseController } from '../factories/controllers/warehouse/EditWarehouseControllerFactory'
import { makeGetWarehouseController } from '../factories/controllers/warehouse/GetWarehouseControllerFactory'
import { makeListWarehouseController } from '../factories/controllers/warehouse/ListWarehouseControllerFactory'

const warehouseRouter = express.Router()

warehouseRouter.get('/', adaptRoute(makeListWarehouseController()))
warehouseRouter.get('/get/:code', adaptRoute(makeGetWarehouseController()))
warehouseRouter.post('/create', adaptRoute(makeCreateWarehouseController()))
warehouseRouter.delete('/delete', adaptRoute(makeDeleteWarehouseController()))
warehouseRouter.put('/edit/:code', adaptRoute(makeEditWarehouseController()))

export { warehouseRouter }
