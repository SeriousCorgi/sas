import Express from 'express';

import HealthcheckController from './controllers/HealthcheckController';
import RegistrationController from './controllers/RegistrationController';
import ReportController from './controllers/ReportController';

const router = Express.Router();

router.use('/', HealthcheckController);
router.use('/register', RegistrationController);
router.use('/reports', ReportController);

export default router;
