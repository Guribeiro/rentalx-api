import { Category } from '../models/Category';
import { CategoryRepository } from '../repositories/CategoryRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryService {
  constructor(private categoryRepository: CategoryRepository) {}

  public execute({ name, description }: IRequest): Category {
    const categoryAlreadyExist = this.categoryRepository.findByName(name);

    if (categoryAlreadyExist)
      throw new Error('category name already registered');

    const category = this.categoryRepository.create({
      name,
      description,
      created_at: new Date(),
    });

    return category;
  }
}

export { CreateCategoryService };
