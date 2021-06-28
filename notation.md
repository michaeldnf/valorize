# -- MÉTODOS --
  - GET    -> Buscar uma informação
  - POST   -> Inserir ou criar uma informação
  - PUT    -> Alterar uma informação
  - DELETE -> Remover uma informação ou dado
  - PATCH  -> Alterar uma informação específica
----------

# -- PARAMS --
  - Routes Params -> São as rotas do site (http://localhost:3000/produtos/4358653)
  - Query Params  -> Filtro de listagens  (http://localhost:3000/produtos?name=teclado&id=01)
  - Body Params   -> Envio por meio do corpo da requisição (Exemplo abaixo)
  Ex: {
    name: "teclado",
    description: "teclado bom"
  }
# -- REQUEST & RESPONSE --
- Request tudo que esta entrando
- Response tudo que ta saindo

<strong>Entity (User) <-> ORM <-> BD = REPOSITÓRIOS</strong>

----------
## Regras de Negócio (Services)
- Cadastro de Usuário
  - ( X ) Não é permitido cadastrar mais de um usuario com o mesmo e-mail;
  - ( X ) Não é permitido cadastrar usuário sem e-mail.
<br>
<br>
- Cadastro de Tag
  - ( X ) Não é permitido cadastrar mais de uma tag com o mesmo nome;
  - ( X ) Não é permitido cadastrar tag sem nome;
  - ( X ) Não é permitido o cadastro por usuários que não sejam administradores.
<br>
<br>
- Cadastro de Elogios
  - (  ) Não é permitido um usuário cadastrar um elogio para si;
  - (  ) Não é permitido cadastrar elogios para usuários inválidos;
  - (  ) O usuário precisa estar autenticado na aplicação.

----------
  
Server -> ( CONTROLLER ) -> SERVICE -> Repositories -> BD