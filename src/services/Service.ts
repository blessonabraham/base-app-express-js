import { DAOServiceType, GetControllerResponse, ServiceType } from "../types/Types";

export class Service implements ServiceType {

    daoService: DAOServiceType

    constructor(daoService: DAOServiceType) {
        this.daoService = daoService
    }

    getService(): GetControllerResponse {
        return this.daoService.getDAOService()
    }


}