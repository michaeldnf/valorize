import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

type AuthenticateRequestProps = {
  email: string;
  password: string;
}

class AuthenticateUserService {
  async execute({ email, password } : AuthenticateRequestProps) {
    const usersRepositories = getCustomRepository(UsersRepositories);
    
    //Verificar se email existe
    //Verificar se senha está correta
    const user = await usersRepositories.findOne({ email });
    if (!user) throw new Error("Email ou senha está incorreta!");
    
    const passwordMatch = await compare(password, user.password);
    if (!passwordMatch) throw new Error("Email ou senha está incorreta!");
  
    //Gerar Token
    const token = sign({ email: user.email }, 'senhaDoHash1234', {
      subject: user.id,
      expiresIn: "1d"
    });

    return token;
  }
}

export { AuthenticateUserService };