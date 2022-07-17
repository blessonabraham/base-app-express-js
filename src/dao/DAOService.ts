import { DAOServiceType, GetControllerResponse } from "../types/Types";

export class DAOService implements DAOServiceType {

    getDAOService(): GetControllerResponse {
        return { title: 'Hello World'}
    }
}