import { ICreateSpecificationDTO } from '../dtos/ICreateSpecificationDTO';
import { Specification } from '../models/Specification';

interface ISpecificationRepository {
  create(data: ICreateSpecificationDTO): Specification;
  findByName(name: string): Specification | undefined;
}

export { ISpecificationRepository };
