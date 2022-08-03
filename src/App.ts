import 'reflect-metadata';
import 'dotenv/config'
import { createExpressServer, useContainer } from 'routing-controllers';
import Container from 'typedi';
import { injectDependencies } from './Configs/InjectDependencies';
import { UserController } from './Controllers/UserController';
import { authorization } from './Configs/Authorization';

// TO-DO
// MongoDB and MySQL Connect Wrapper
// Utilities & Constants
// Unit Test & E2E
// Proper scripts
// DI Injection XML?
// Exception Handling
// Logger
// Readme
// Deployment Setup - Dev, QA, Prod
// Swagger

useContainer(Container);
injectDependencies()

const port = process.env.SERVICE_PORT || 3000
createExpressServer({
  authorizationChecker: authorization,
  controllers: [UserController],
}).listen(port, () => console.log(`[server]: Server is running at port:`, port));
