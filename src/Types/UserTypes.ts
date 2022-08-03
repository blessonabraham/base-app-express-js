import { IsEmail, IsString, MinLength } from "class-validator";

export type UserType = {
    id: number,
    name: string,
    email: string,
    password: string
}

export class UserReqDTO {
    @IsString()
    name: string
    @IsEmail()
    email: string;
    @MinLength(6)
    password: string;
}

export type UserResDTO = {
    id: number,
    name: string,
    email: string,
    token: string
}

export abstract class IUserService {
    abstract getAllUsers(): string
    abstract getUserById(id: number): string
    abstract addUser(user: UserReqDTO): UserResDTO
    abstract updateUser(id: number, user: UserReqDTO): UserResDTO
    abstract removeUser(id: number): string
}

export abstract class IUserDAOService {
    abstract getAllUsers(): string
    abstract getUserById(id: number): string
    abstract addUser(user: UserReqDTO): UserResDTO
    abstract updateUser(id: number, user: UserReqDTO): UserResDTO
    abstract removeUser(id: number): string
}