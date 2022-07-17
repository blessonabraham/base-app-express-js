import { BaseDAOService } from "../base/BaseDAOService";
import { GetControllerResponse } from "../types/Types";

export class DAOService extends BaseDAOService {

    constructor(){
        super()
    }

    getDAOService(): GetControllerResponse {
        return { title: 'Hello World'}
    }
}