import { ICreateCategoryDTO } from '../dtos/ICreateCategoryDTO';
import { Category } from '../models/Category';

interface ICategoryRepository {
  create(data: ICreateCategoryDTO): Category;
  findByName(name: string): Category | undefined;
  index(): Category[];
}

export { ICategoryRepository };
