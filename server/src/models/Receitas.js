const pool = require('../config/db')

const getAllIncome = async (user_id) => {
    const { rows } = await pool.query(
        'SELECT * FROM receitas WHERE user_id = $1',
        [user_id]
    )
    return rows[0]
}

const createIncome = async (user_id, titulo, descricao, valor, categoria_id, data_receita) => {
    const { rows } = await pool.query(
        'INSERT INTO receitas (user_id, titulo, descricao, valor, categoria_id, data_receita) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
        [user_id, titulo, descricao, valor, categoria_id, data_receita]
    )
    return rows[0]
}

module.exports = {
    getAllIncome,
    createIncome
}