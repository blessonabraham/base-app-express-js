import { Service } from "typedi";
import { IUserDAOService, UserType } from "../Types/UserTypes";

@Service()
export class UserDAOService implements IUserDAOService {

    constructor() { }

    getAllUsers() {
        return "getAllUsers"
    }

    getUserById(_id: number) {
        return "getUserById"
    }

    addUser(_user: UserType) {
        return "addUser"
    }

    updateUser(_id: number, _user: UserType) {
        return "updateUser"
    }

    removeUser(_id: number) {
        return "removeUser"
    }

}