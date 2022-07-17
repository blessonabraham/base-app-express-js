import express, { Express, Request, response, Response } from 'express';
import { requestResponder } from './src/utils/Utils';
import * as dotenv from 'dotenv'
import { BaseController } from './src/base/BaseController';
import { Controller } from './src/controllers/Controller';
import { BaseService } from './src/base/BaseService';
import { Service } from './src/services/Service';
import { DAOService } from './src/dao/DAOService';
import { BaseDAOService } from './src/base/BaseDAOService';

const app: Express = express();
dotenv.config()

const theDAOService: BaseDAOService = new DAOService()
const theService: BaseService = new Service(theDAOService)
const theController: BaseController = new Controller(theService)

app.get('/', (req, res) => {
  requestResponder(req, res, theController.getController)
});

const port = process.env.SERVER_PORT
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});