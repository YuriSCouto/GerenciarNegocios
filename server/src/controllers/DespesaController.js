const { getTotalExpense, getAllExpense, createExpense } = require('../models/Despesas')

const totalExpense = async (req, res) => {
    const { user_id } = req.params
    const result = await getTotalExpense(user_id)
    try {
        if (result) {
            res.status(200).json(result)
        } else {
            res.status(404).json({message: "Nenhuma despesa encontrada"})
        }
    } catch (erro) {
        res.status(500).json({ message: "Erro ao buscar despesas", error: erro.message })
    }
}

const listExpense = async (req, res) => {
    const { user_id } = req.params
    const result = await getAllExpense(user_id)
    try {
        if (result) {
            res.status(200).json(result)
        } else {
            res.status(404).json({message: "Nenhuma despesa encontrada"})
        }
    } catch (erro) {
        res.status(500).json({ message: "Erro ao buscar despesas", error: erro.message })
    }
}

const createNewExpense = async (req, res) => {
    const { user_id, titulo, descricao, valor, categoria_id, data_despesa } = req.body

    try {
        const result = await createExpense(user_id, titulo, descricao, valor, categoria_id, data_despesa)
        res.status(201).json(result)
    } catch (erro) {
        res.status(500).json({ message: "Erro ao criar despesa", error: erro.message })
    }
}

module.exports = {
    totalExpense,
    listExpense,
    createNewExpense
}