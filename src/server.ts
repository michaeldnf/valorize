import 'reflect-metadata';
import express, { Request, Response, NextFunction } from "express";
import 'express-async-errors';
import cors from 'cors';

import { router } from "./routes";
import "./database";


const app = express();

//Habilita outras fontes para que consiga utilizar o back-end
app.use(cors()); 

app.use(express.json());
app.use(router);

//Middleware -> Intercepta ou Repassa execução
app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof Error) return response.status(400).json({error: err.message});

  return response.status(500).json({
    status: "error",
    message: "Erro interno no Servidor"
  });
});

app.listen(3000, () => console.log("Server is running on Port 3000"));

/* Exemplo de erro com try catch  
  try {
  } catch(err) {
    return response.status(400).json({error: err.message});
  }
*/