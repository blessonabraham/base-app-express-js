import { Service } from "typedi";
import { IUserDAOService, IUserService, UserType } from "../Types/UserTypes";

@Service()
export class UserService implements IUserService {

    constructor(private userDAOService: IUserDAOService) { }

    getAllUsers() {
        return this.userDAOService.getAllUsers();
    }

    getUserById(id: number) {
        return this.userDAOService.getUserById(id);
    }

    addUser(user: UserType) {
        return this.userDAOService.addUser(user);
    }

    updateUser(id: number, user: UserType) {
        return this.userDAOService.updateUser(id, user);
    }

    removeUser(id: number) {
        return this.userDAOService.removeUser(id);
    }

}