import { ICreateSpecificationDTO } from '../../dtos/ICreateSpecificationDTO';
import { Specification } from '../../models/Specification';
import { ISpecificationRepository } from '../ISpecificationRepository';

class SpecificationRepository implements ISpecificationRepository {
  private specifications: Specification[] = [];

  private static INSTANCE: SpecificationRepository;

  private constructor() {
    this.specifications = [];
  }

  public static getInstance() {
    if (!SpecificationRepository.INSTANCE) {
      SpecificationRepository.INSTANCE = new SpecificationRepository();
    }
    return SpecificationRepository.INSTANCE;
  }

  public create({
    name,
    description,
    created_at,
  }: ICreateSpecificationDTO): Specification {
    const specification = new Specification({
      name,
      description,
      created_at,
    });

    this.specifications.push(specification);

    return specification;
  }

  public findByName(name: string): Specification | undefined {
    const specification = this.specifications.find(
      specification => specification.name === name,
    );

    return specification;
  }
}

export { SpecificationRepository };
