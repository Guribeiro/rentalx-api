import { Router } from 'express';

import { CategoryRepository } from '../repositories/CategoryRepository';
import { CreateCategoryService } from '../services/CreateCategoryService';

const categoriesRoutes = Router();
const categoryRepository = new CategoryRepository();

categoriesRoutes.post('/', (request, response) => {
  try {
    const { name, description } = request.body;

    const createCategoryService = new CreateCategoryService(categoryRepository);

    const category = createCategoryService.execute({
      name,
      description,
    });

    return response.status(200).json(category);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

categoriesRoutes.get('/', (request, response) => {
  const categories = categoryRepository.index();

  return response.status(200).json(categories);
});

export { categoriesRoutes };
