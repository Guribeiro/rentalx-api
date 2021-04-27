import { Category } from '../models/Category';

interface ICreateCategoryDTO {
  name: string;
  description: string;
  created_at: Date;
}

class CategoryRepository {
  private categories: Category[] = [];

  constructor() {
    this.categories = [];
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
