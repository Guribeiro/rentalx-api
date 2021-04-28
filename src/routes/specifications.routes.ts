import { Router } from 'express';

import { createSpecificationController } from '../modules/vehicles/useCases/CreateSpecification';

const specificationsRoutes = Router();

specificationsRoutes.post('/', (request, response) => {
  return createSpecificationController.handle(request, response);
});

export { specificationsRoutes };
