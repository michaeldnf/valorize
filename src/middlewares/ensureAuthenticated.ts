import { Request, Response, NextFunction  } from 'express';
import { verify } from 'jsonwebtoken';

type PayloadProps = {
  sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  //Receber token
  const authToken = request.headers.authorization;
  
  //Validar se o token está preenchido
  if(!authToken) return response.status(401).json({message: "Token inválido!"}); //ou .end()
  
  //Validar se token é válido
  const [ ,token ] = authToken.split(' ');

  try {
    const { sub } = verify(token, 'senhaDoHash1234') as PayloadProps;
    //Recuperar informações do usuário
    request.user_id = sub;

    return next();
  } catch {return response.status(401).json({message: "Token inválido!"})}
}