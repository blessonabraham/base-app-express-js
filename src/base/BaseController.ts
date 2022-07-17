import { GetControllerResponse } from "../types/Types"
import { BaseService } from "./BaseService"

export abstract class BaseController {

    baseService: BaseService

    constructor(baseService: BaseService) {
        this.baseService = baseService
    }

    getController(): GetControllerResponse { return null }


}