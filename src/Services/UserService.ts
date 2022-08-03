import { Service } from "typedi";
import { IUserDAOService, IUserService, UserReqDTO, UserType } from "../Types/UserTypes";

@Service()
export class UserService implements IUserService {

    constructor(private userDAOService: IUserDAOService) { }

    getAllUsers() {
        return this.userDAOService.getAllUsers();
    }

    getUserById(id: number) {
        return this.userDAOService.getUserById(id);
    }

    addUser(user: UserReqDTO) {
        return this.userDAOService.addUser(user);
    }

    updateUser(id: number, user: UserReqDTO) {
        return this.userDAOService.updateUser(id, user);
    }

    removeUser(id: number) {
        return this.userDAOService.removeUser(id);
    }

}