import { Request, Response } from 'express';

import { ListCategoriesUseCase } from './ListCategoriesUseCase';

class ListCategoriesController {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}

  public handle(request: Request, response: Response): Response {
    try {
      const categories = this.listCategoriesUseCase.execute();
      return response.status(200).json(categories);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { ListCategoriesController };
