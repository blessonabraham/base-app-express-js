import { BaseController } from "../base/BaseController";
import { BaseService } from "../base/BaseService";

export class Controller extends BaseController {

    constructor(baseService: BaseService) {
        super(baseService)
    }

    getController() {
        return this.baseService.getService()
    }

}