export type GetControllerResponse = {
    title: String
}

export type ControllerType = {
    getController(): GetControllerResponse
}

export type ServiceType = {
    getService(): GetControllerResponse
}

export type DAOServiceType = {
    getDAOService(): GetControllerResponse
}

