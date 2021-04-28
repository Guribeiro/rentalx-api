import { Category } from '../../models/Category';
import { CategoryRepository } from '../../repositories/implementations/CategoryRepository';

class ListCategoriesUseCase {
  constructor(private categoriesRepository: CategoryRepository) {}

  public execute(): Category[] {
    const categories = this.categoriesRepository.index();

    return categories;
  }
}

export { ListCategoriesUseCase };
