import { GetControllerResponse } from "../types/Types"
import { BaseDAOService } from "./BaseDAOService"

export abstract class BaseService {

    DAOService: BaseDAOService

    constructor(DAOService: BaseDAOService) {
        this.DAOService = DAOService
    }

    getService(): GetControllerResponse { return null }
}