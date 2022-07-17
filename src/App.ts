import express, { Request, Response } from 'express';
import { Controller } from './controllers/Controller';
import { DAOService } from './dao/DAOService';
import { Service } from './services/Service';
import { DAOServiceType, ServiceType, ControllerType } from './types/Types';

export const App = () => {
  const theExpress = express();
  const daoService: DAOServiceType = new DAOService()
  const service: ServiceType = new Service(daoService)
  const controller: ControllerType = new Controller(service)

  theExpress.get('/', (_req: Request, res: Response) => {
    res.json(controller.getController())
  });

  return theExpress
}