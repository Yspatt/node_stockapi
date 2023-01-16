import { Controller } from '@core/infra/Controller'
import { ViewPickingRouteController } from '@modules/picking/useCases/viewPickingRouteUseCase/ViewPickingRouteController'
import { ViewPickingRouteUseCase } from '@modules/picking/useCases/viewPickingRouteUseCase/ViewPickingRouteUseCase'

export function makeViewPickingRouteController(): Controller {
    const viewPickingRouteUseCase = new ViewPickingRouteUseCase()
    const viewPickingRouteController = new ViewPickingRouteController(
        viewPickingRouteUseCase
    )

    return viewPickingRouteController
}
