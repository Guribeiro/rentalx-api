import { Router } from 'express';
import multer from 'multer';

import { createCategoryController } from '../modules/vehicles/useCases/CreateCategory';
import { importCategoryController } from '../modules/vehicles/useCases/ImportCategory';
import { listCategoriesController } from '../modules/vehicles/useCases/ListCategories';

const categoriesRoutes = Router();

const upload = multer({
  dest: './tmp',
});

categoriesRoutes.post('/', (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get('/', (request, response) => {
  return listCategoriesController.handle(request, response);
});

categoriesRoutes.post('/import', upload.single('file'), (request, response) => {
  return importCategoryController.handle(request, response);
});

export { categoriesRoutes };
