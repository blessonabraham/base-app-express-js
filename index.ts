import express, { Express } from 'express';
import * as dotenv from 'dotenv'
import { Controller } from './src/controllers/Controller';
import { Service } from './src/services/Service';
import { DAOService } from './src/dao/DAOService';
import { ControllerType, DAOServiceType, ServiceType } from './src/types/Types';

const app: Express = express();
dotenv.config()

const daoService: DAOServiceType  = new DAOService()
const service: ServiceType = new Service(daoService)
const controller: ControllerType  = new Controller(service)

app.get('/', (req, res) => {
  res.json(controller.getController())
});

const port = process.env.SERVER_PORT
app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});