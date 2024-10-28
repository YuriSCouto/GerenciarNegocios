const { getAllCategory, createCategory } = require('../models/Categorias')

const listCategory = async (req, res) => {
    const { user_id } = req.params
    try {
        const result = await getAllCategory(user_id)
        if(result) {
            res.status(200).json(result)
        } else {
            res.status(404).json({message: "Usuário não encontrado"})
        }
    } catch (erro) {
        res.status(500).json({ message: "Erro ao buscar o categoria", error: erro.message })
    }
}

const createNewCategory = async (req, res) => {
    const { user_id, nome_categoria } = req.body

    try {
        const result = await createCategory(user_id, nome_categoria)   
        res.status(201).json(result)
    } catch (erro) {
        res.status(500).json({ message: "Erro ao criar categoria", error: erro.message })
    }
}

module.exports = {
    listCategory,
    createNewCategory
}