import { Request, Response } from 'express';

import { CreateCategoryUseCase } from './CreateCategoryUseCase';

class CreateCategoryController {
  constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

  public handle(request: Request, response: Response): Response {
    try {
      const { name, description } = request.body;

      const category = this.createCategoryUseCase.execute({
        name,
        description,
      });

      return response.status(200).json(category);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { CreateCategoryController };
