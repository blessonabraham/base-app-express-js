import { Service } from "typedi";
import { IUserDAOService, UserReqDTO } from "../Types/UserTypes";

@Service()
export class UserDAOService implements IUserDAOService {

    constructor() { }

    getAllUsers() {
        return "getAllUsers"
    }

    getUserById(_id: number) {
        return "getUserById"
    }

    addUser(user: UserReqDTO)  {
        return {
            id: 0,
            name: user.name,
            email: user.email,
            token: 'sdfsdfsdf'
        }
    }

    updateUser(_id: number, user: UserReqDTO) {
        return {
            id: 0,
            name: user.name,
            email: user.email,
            token: 'sdfsdfsdf'
        }
    }

    removeUser(_id: number) {
        return "removeUser"
    }

}