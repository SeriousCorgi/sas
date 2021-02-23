import Express from 'express';

import HealthcheckController from './controllers/HealthcheckController';
import RegistrationController from './controllers/RegistrationController';

const router = Express.Router();

router.use('/', HealthcheckController);
// router.use('/register', RegistrationController);

export default router;
