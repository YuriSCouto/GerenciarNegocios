const express = require('express');
const { listUsers, getUser, createNewUser } = require('./controllers/UsuarioController');
const { listCategory, createNewCategory } = require('./controllers/CategoriaController');
const { listExpense, createNewExpense } = require('./controllers/DespesaController');
const { listIncome, createNewIncome } = require('./controllers/ReceitaController');

const routes = express.Router();

routes.get('/users', listUsers);
routes.get('/users/:id', getUser);
routes.post('/users', createNewUser);

routes.get('/category/:user_id', listCategory);
routes.post('/category', createNewCategory);

routes.get('/expense/:user_id', listExpense);
routes.post('/expense', createNewExpense);

routes.get('/income/:user_id', listIncome);
routes.post('/income', createNewIncome);

module.exports = routes;