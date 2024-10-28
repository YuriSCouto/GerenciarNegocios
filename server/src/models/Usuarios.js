const pool = require('../config/db');
const bcrypt = require('bcrypt');

const saltRounds = 12

const getAllUsers = async () => {
  const { rows } = await pool.query('SELECT * FROM usuarios');
  return rows;
};

const getUserById = async (user_id) => {
  const { rows } = await pool.query(
    'SELECT * FROM users WHERE id = $1',
    [user_id]);
  return rows[0];
};

const createUser = async (nome, sobrenome, email, senha) => {
  const hashedPassword = await bcrypt.hash(senha, saltRounds);

  const { rows } = await pool.query(
    'INSERT INTO usuarios (nome, sobrenome, email, senha) VALUES ($1, $2, $3, $4) RETURNING *',
    [nome, sobrenome, email, hashedPassword]
  );

  return rows[0];
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser
};
