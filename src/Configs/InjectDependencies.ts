import Container from "typedi"
import { UserDAOService } from "../DAOServices/UserDAOService"
import { UserService } from "../Services/UserService"
import { IUserDAOService, IUserService } from "../Types/UserTypes"


export const injectDependencies = () => {

    //Injecting dependencies and the order does matter
    Container.set(IUserDAOService, new UserDAOService())
    Container.set(IUserService, new UserService(Container.get(IUserDAOService)))

}