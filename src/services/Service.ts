import { BaseDAOService } from "../base/BaseDAOService";
import { BaseService } from "../base/BaseService";
import { GetControllerResponse } from "../types/Types";

export class Service extends BaseService {

    constructor(DAOService: BaseDAOService) {
        super(DAOService)
    }

    getService(): GetControllerResponse {
        return this.DAOService.getDAOService()
    }


}