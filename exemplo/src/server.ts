import express, { Application, Request, Response } from 'express';

const app: Application = express();
const PORT: number = 3000;

app.use(express.json());

// Middleware para registrar a hora da requisição
app.use((req: Request, res: Response, next) => {
  console.log(`Requisição recebida em: ${new Date().toISOString()}`);
  next();
});

// 🔹 Rota GET (Buscar dados)
app.get('/usuarios', (req: Request, res: Response) => {
  res.status(200).json({ mensagem: 'Lista de usuários' });
});

// Rota GET que retorna informações pessoais em JSON
app.get('/sobre', (req: Request, res: Response) => {
  res.json({
     Nome: 'Cauã Rodrigues',
     Idade: '18 anos',
     Descricao: 'Sou um estudante de ADS do SENAC São Leopoldo, que gosto de desenvolver sistemas web.'
    });
});

app.post('/comentarios', (req: Request, res: Response) => {
  const { texto } = req.body;
  if (!texto) {
    res.status(400).json({ mensagem: 'Mensagem vazia!' });
  } else {
     res.status(201).json({ mensagem: `Comentario ${texto} criado com sucesso!` });
  }
});

// 🔹 Rota POST (Criar novo usuário)
app.post('/usuarios', (req: Request, res: Response) => {
  const { nome } = req.body as { nome: string };
  if (!nome) {
    res.status(400).json({ mensagem: 'Nome é obrigatório!' });
  } else {
     res.status(201).json({ mensagem: `Usuário ${nome} criado com sucesso!` });
  }
});

app.listen(PORT, () => console.log(`🔥 Servidor rodando em http://localhost:${PORT}`));