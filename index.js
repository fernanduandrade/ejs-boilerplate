import express from 'express';
import router from './src/routes/router.js';
import path from 'path';
const __dirname = path.resolve();

const app = express();
const port = 8080

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Definindo template engine
app.set('views', path.join(__dirname, './src/views'));
app.set('view engine','ejs');

// Arquivos estáticos
app.use(express.static('./src/public'));

// Rotas
app.use('/', router);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});