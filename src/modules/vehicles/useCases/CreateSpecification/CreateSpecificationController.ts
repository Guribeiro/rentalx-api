import { Request, Response } from 'express';

import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

class CreateSpecificationController {
  constructor(private createSpecificationUseCase: CreateSpecificationUseCase) {}
  public handle(request: Request, response: Response): Response {
    try {
      const { name, description } = request.body;

      const specification = this.createSpecificationUseCase.execute({
        name,
        description,
      });

      return response.status(200).json(specification);
    } catch (error) {
      return response.status(400).json({ error: error.messsage });
    }
  }
}

export { CreateSpecificationController };
