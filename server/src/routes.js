const express = require('express');
const { listUsers, getUser, createNewUser } = require('./controllers/UsuarioController');
const { listCategory, createNewCategory } = require('./controllers/CategoriaController');
const { listExpense, totalExpense, createNewExpense } = require('./controllers/DespesaController');
const { listIncome, totalIncome, createNewIncome } = require('./controllers/ReceitaController');

const routes = express.Router();

routes.get('/users', listUsers);
routes.get('/users/:id', getUser);
routes.post('/users', createNewUser);

routes.get('/category/:user_id', listCategory);
routes.post('/category', createNewCategory);


routes.get('/expense/:user_id', listExpense);
routes.get('/expense/t/:user_id', totalExpense);
routes.post('/expense', createNewExpense);


routes.get('/income/:user_id', listIncome);
routes.get('/income/t/:user_id', totalIncome);
routes.post('/income', createNewIncome);

module.exports = routes;