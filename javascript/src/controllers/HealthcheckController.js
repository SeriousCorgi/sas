import Express from 'express';
import { OK } from 'http-status-codes';

const HealthcheckController = Express.Router();

const healthcheckHandler = async (req, res) => {
  return res.sendStatus(OK);
}

HealthcheckController.get('/healthcheck', healthcheckHandler);

export default HealthcheckController;
