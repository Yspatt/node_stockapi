import { Router } from 'express'

import { pickingRouter } from './picking.routes'
import { shelfRouter } from './shelf.routes'
import { stockRouter } from './stock.routes'
import { warehouseRouter } from './warehouse.routes'

const routes = Router()

routes.use('/warehouse', warehouseRouter)
routes.use('/shelf', shelfRouter)
routes.use('/stock', stockRouter)
routes.use('/picking', pickingRouter)

export { routes }
