import { Specification } from '../../models/Specification';
import { SpecificationRepository } from '../../repositories/implementations/SpecificationRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationUseCase {
  constructor(private specificationsRepository: SpecificationRepository) {}

  public execute({ name, description }: IRequest): Specification {
    const specificationAlreadyExist = this.specificationsRepository.findByName(
      name,
    );

    if (specificationAlreadyExist)
      throw new Error('specification name already registered');

    const specification = this.specificationsRepository.create({
      name,
      description,
      created_at: new Date(),
    });

    return specification;
  }
}

export { CreateSpecificationUseCase };
