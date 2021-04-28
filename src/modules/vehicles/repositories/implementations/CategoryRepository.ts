import { ICreateCategoryDTO } from '../../dtos/ICreateCategoryDTO';
import { Category } from '../../models/Category';
import { ICategoryRepository } from '../ICategoryRepository';

class CategoryRepository implements ICategoryRepository {
  private categories: Category[] = [];

  private static INSTANCE: CategoryRepository;

  private constructor() {
    this.categories = [];
  }

  public static getInstance(): CategoryRepository {
    if (!CategoryRepository.INSTANCE) {
      CategoryRepository.INSTANCE = new CategoryRepository();
    }
    return CategoryRepository.INSTANCE;
  }

  public create({
    name,
    description,
    created_at,
  }: ICreateCategoryDTO): Category {
    const category = new Category({
      name,
      description,
      created_at,
    });

    this.categories.push(category);

    return category;
  }

  public index(): Category[] {
    return this.categories;
  }

  public findByName(name: string): Category | undefined {
    const category = this.categories.find(category => category.name === name);

    return category;
  }
}

export { CategoryRepository };
