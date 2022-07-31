import 'reflect-metadata';
import { createExpressServer } from 'routing-controllers';
import { UserController } from './Controllers/UserController';

// TO-DO
// Service Layer & DAO Layer
// Env Config - dotenv
// Authentication & Authorization
// Utilities & Constants
// Unit Test & E2E
// Proper scripts
// MongoDB and MySQL Wrapper
// DI Injection XML?
// Exception Handling
// Logger
// Readme
// Deployment Setup - Dev, QA, Prod

const app = createExpressServer({
  controllers: [UserController],
});

app.listen(3000);