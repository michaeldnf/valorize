import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";
import { UsersRepositories } from "../repositories/UsersRepositories";

type ComplimentRequestProps = {
  tag_id: string;
  user_sender: string;
  user_receiver: string;
  message: string;
}

class CreateComplimentService {
  async execute({ tag_id, user_sender, user_receiver, message } : ComplimentRequestProps) {
    if (!message) throw new Error("Mensagem inválida!");
    if (user_sender === user_receiver) throw new Error("Não é possível cadastrar um elogio para o mesmo usuário!")

    const usersRepositories = getCustomRepository(UsersRepositories);
    const userReceiverExists = await usersRepositories.findOne(user_receiver);
    if (!userReceiverExists) throw new Error("O usuário destinatário não exite na base de dados!")
    
    const complimentsRepositories = getCustomRepository(ComplimentsRepositories);
    const compliment = complimentsRepositories.create({ tag_id, user_receiver, user_sender, message });

    await complimentsRepositories.save(compliment);

    return compliment;
  }
}

export { CreateComplimentService };