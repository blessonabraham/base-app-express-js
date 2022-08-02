import 'reflect-metadata';
import { createExpressServer, useContainer } from 'routing-controllers';
import Container from 'typedi';
import { UserController } from './Controllers/UserController';
import { UserDAOService } from './DAOServices/UserDAOService';
import { UserService } from './Services/UserService';
import { IUserDAOService, IUserService } from './Types/UserTypes';

// TO-DO
// Service Layer & DAO Layer - Done
// Env Config - dotenv
// Authentication & Authorization
// Validation
// Utilities & Constants
// Unit Test & E2E
// Proper scripts
// MongoDB and MySQL Wrapper
// DI Injection XML?
// Exception Handling
// Logger
// Readme
// Deployment Setup - Dev, QA, Prod

useContainer(Container);

// Here we Inject dependencies and the order does matter
Container.set(IUserDAOService, new UserDAOService())
Container.set(IUserService, new UserService(Container.get(IUserDAOService)))

createExpressServer({
  controllers: [UserController],
}).listen(3000, () => console.log(`[server]: Server is running`));
