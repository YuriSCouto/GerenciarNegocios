const pool = require('../config/db')

const getTotalExpense = async (user_id) => {
    console.log(user_id);
    
    const { rows } = await pool.query(
        'SELECT user_id, SUM(valor) AS valor_total FROM despesas WHERE user_id = $1 GROUP BY user_id',
        [user_id]
    )
    return rows[0];
}

const getAllExpense = async (user_id) => {
    const { rows } = await pool.query(
        'SELECT * FROM despesas WHERE user_id = $1',
        [user_id]
    )
    return rows
}

const createExpense = async (user_id, titulo, descricao, valor, categoria_id, data_despesa) => {
    const { rows } = await pool.query(
        'INSERT INTO despesas (user_id, titulo, descricao, valor, categoria_id, data_despesa) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
        [user_id, titulo, descricao, valor, categoria_id, data_despesa]
    )
    return rows[0]
}

module.exports = {
    getAllExpense,
    getTotalExpense,
    createExpense
}