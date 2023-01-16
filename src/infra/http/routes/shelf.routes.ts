import express from 'express'

import { adaptRoute } from '@core/infra/adapers/ExpressRouteAdapter'

import { makeCreateShelfController } from '../factories/controllers/shelf/CreateShelfControllerFactory'
import { makeDeleteShelfController } from '../factories/controllers/shelf/DeleteShelfControllerFactory'
import { makeGetShelfController } from '../factories/controllers/shelf/GetShelfControllerFactory'
import { makeGetShelfsController } from '../factories/controllers/shelf/GetShelfsControllerFactory'

const shelfRouter = express.Router()

shelfRouter.get('/get/:reference', adaptRoute(makeGetShelfController()))
shelfRouter.post('/create', adaptRoute(makeCreateShelfController()))
shelfRouter.delete('/delete', adaptRoute(makeDeleteShelfController()))
shelfRouter.post('/list', adaptRoute(makeGetShelfsController()))

export { shelfRouter }
