import express from 'express';

import githubRoutes from './github';
import itemRoutes from './items';
import organizationRoutes from './organizations';
import sentryRoutes from './sentry';
import userRoutes from './users';

const router = express.Router();

router.use('/sentry', sentryRoutes);
router.use('/github', githubRoutes);
router.use('/organizations', organizationRoutes);
router.use('/items', itemRoutes);
router.use('/users', userRoutes);

export default router;
