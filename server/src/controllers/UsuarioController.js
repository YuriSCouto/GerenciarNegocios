// controllers/userController.js
const { getAllUsers, getUserById, createUser } = require('../models/Usuarios');

const listUsers = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (erro) {
    res.status(500).json({ message: "Erro ao buscar usuários", error: erro.message });
  }
};

const getUser = async (req, res) => {
  try {
    const user = await getUserById(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).send('Usuário não encontrado');
    }
  } catch (error) {
    res.status(500).send('Erro ao buscar o usuário');
  }
};

const createNewUser = async (req, res) => {
  const { nome, sobrenome, email, senha } = req.body;

  try {
    const newUser = await createUser(nome, sobrenome, email, senha);
    res.status(201).json(newUser);
  } catch (erro) {
    res.status(500).json({ message: "Erro ao criar usuário", error: erro.message });
  }
};

module.exports = {
  listUsers,
  getUser,
  createNewUser,
};
