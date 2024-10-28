const pool = require('../config/db')

const getAllCategory = async (user_id) => {
    const { rows } = await pool.query(
        'SELECT * FROM categorias WHERE user_id = $1',
        [user_id]
    )
    return rows
}

const createCategory = async (user_id, nome_categoria) => {
    const { rows } = await pool.query(
        'INSERT INTO categorias (user_id, nome_categoria) VALUES ($1, $2) RETURNING *',
        [user_id, nome_categoria]
    )
    return rows[0]
}

module.exports = {
    getAllCategory,
    createCategory
}