export type UserType = {
    id: number,
    name: string,
    email?: string,
    password?: string
}

export abstract class IUserService {
    abstract getAllUsers(): string
    abstract getUserById(id: number): string
    abstract addUser(user: UserType): string
    abstract updateUser(id: number, user: UserType): string
    abstract removeUser(id: number): string
}

export abstract class IUserDAOService {
    abstract getAllUsers(): string
    abstract getUserById(id: number): string
    abstract addUser(user: UserType): string
    abstract updateUser(id: number, user: UserType): string
    abstract removeUser(id: number): string
}