import { ControllerType, ServiceType } from "../types/Types"

export class Controller implements ControllerType {

    service: ServiceType;

    constructor(service: ServiceType) {
        this.service = service
    }

    getController() {
        return this.service.getService()
    }

}