import express from 'express'; // Importando o Express
// COMECA RODANDO O SERVIDOR COM EXPRESS
const app = express();

// LE OS ARQUIVOS JSON
app.use(express.json());
//CRIANDO A PRIMEIRA ROTA
app.get("/", (request, response) => {
// retorna a requisicao da rota em formato JSON
return response.status(200).json({message: "Rota de teste funcionando em modo desenvolvimento!",status: "success"})
});
// O SERVIDOR ESTA RODANDO NA PORTA 4444
app.listen(4444, () => console.log('Server running on port 4444 in dev mode'));

