import csvParse from 'csv-parse';
import fs from 'fs';

import { CategoryRepository } from '../../repositories/implementations/CategoryRepository';

interface ICategory {
  name: string;
  description: string;
}

class ImportCategoryUseCase {
  constructor(private categoryRepository: CategoryRepository) {}

  public loadCategories(file: Express.Multer.File): Promise<ICategory[]> {
    return new Promise((resolve, reject) => {
      const categories: ICategory[] = [];

      const stream = fs.createReadStream(file.path);

      const parseFile = csvParse();

      stream.pipe(parseFile);

      parseFile
        .on('data', async line => {
          const [name, description] = line;
          categories.push({
            name,
            description,
          });
        })
        .on('end', () => {
          fs.promises.unlink(file.path);
          resolve(categories);
        })
        .on('error', err => reject(err));

      return categories;
    });
  }

  public async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file);

    categories.map(async category => {
      const { name, description } = category;
      const categoryExist = this.categoryRepository.findByName(name);

      if (!categoryExist) {
        this.categoryRepository.create({
          name,
          description,
          created_at: new Date(),
        });
      }
    });
  }
}

export { ImportCategoryUseCase };
