import { Service } from "typedi";
import { IUserDAOService, UserType } from "../Types/UserTypes";

@Service()
export class UserDAOService implements IUserDAOService {

    constructor() { }

    getAllUsers() {
        return "getAllUsers"
    }

    getUserById(id: number) {
        return "getUserById"
    }

    addUser(user: UserType) {
        return "addUser"
    }

    updateUser(id: number, user: UserType) {
        return "updateUser"
    }

    removeUser(id: number) {
        return "removeUser"
    }

}