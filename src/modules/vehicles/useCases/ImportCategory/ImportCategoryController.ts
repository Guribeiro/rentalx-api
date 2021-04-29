import { Request, Response } from 'express';

import { ImportCategoryUseCase } from './ImportCategoryUseCase';

class ImportCategoryController {
  constructor(private importCategoryUseCase: ImportCategoryUseCase) {}

  public handle(request: Request, response: Response): Response {
    try {
      const { file } = request;

      this.importCategoryUseCase.execute(file);

      return response.json({ ok: true });
    } catch (error) {
      return response.status(200).json({ error: error.message });
    }
  }
}

export { ImportCategoryController };
