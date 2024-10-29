const { getAllIncome, getTotalIncome, createIncome } = require('../models/Receitas')

const totalIncome = async (req, res) => {
    const { user_id } = req.params
    const result = await getTotalIncome(user_id)
    try {
        if (result) {
            res.status(200).json(result)
        } else {
            res.status(404).json({message: "Nenhuma receita encontrada"})
        }
    } catch (erro) {
        res.status(500).json({ message: "Erro ao buscar receitas", error: erro.message })
    }
}

const listIncome = async (req, res) => {
    const { user_id } = req.params
    const result = await getAllIncome(user_id)
    try {
        if (result) {
            res.status(200).json(result)
        } else {
            res.status(404).json({message: "Nenhuma receita encontrada"})
        }
    } catch (erro) {
        res.status(500).json({ message: "Erro ao buscar receitas", error: erro.message })
    }
}

const createNewIncome = async (req, res) => {
    const { user_id, titulo, descricao, valor, categoria_id, data_receita } = req.body

    try {
        const result = await createIncome(user_id, titulo, descricao, valor, categoria_id, data_receita)
        res.status(201).json(result)
    } catch (erro) {
        res.status(500).json({ message: "Erro ao criar dispesa", error: erro.message })
    }
}

module.exports = {
    listIncome,
    totalIncome,
    createNewIncome
}