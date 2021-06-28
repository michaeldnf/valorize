import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from "../repositories/UsersRepositories";
import { hash } from 'bcryptjs';

type UserRequestProps = {
  name: string;
  email: string;
  password: string;
  admin?: boolean;
}

class CreateUserService {
  async execute({ name, email, password, admin = false } : UserRequestProps) {
    const usersRepository = getCustomRepository(UsersRepositories);

    if (!email) throw new Error("Email incorreto!");

    const userAlreadyExists = await usersRepository.findOne({ email });
    if (userAlreadyExists) throw new Error("Usuário já existe!");

    const passwordHash =  await hash(password, 8);

    const user = usersRepository.create({ name, email, password: passwordHash, admin });
    await usersRepository.save(user);
    
    return user;
  }
}

export { CreateUserService };