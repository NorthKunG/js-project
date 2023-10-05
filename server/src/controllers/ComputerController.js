const {Computer} = require('../models')

module.exports = {
    async index(req, res) {
        try {
            const computers = await Computer.findAll()
            res.send(computers)
        } catch (error) {
            res.status(500).send({
                error: 'The computers information was incorrect'
            })
        }
    },

    async create(req, res) {
        try {
            const computer = await Computer.create(req.body)
            res.send(computer.toJSON())
        } catch (error) {
            res.status(500).send({
                error: 'Create computer incorrect'
            })
        }
    },

    async put(req, res) {
        try {
            await Computer.update(req.body, {
                where: {
                    id: req.params.computerId
                }
            })
        } catch (error) {
            res.status(500).send({
                error: 'Update computer incorrect'
            })
        }
    },

    async remove(req, res) {
        try {
            const computer = await Computer.findOne({
                where: {
                    id: req.params.computerId
                }
            })

            if (!computer) {
                return res.status(403).send({
                    error: 'The computer information was incorrect'
                })
            }

            await computer.destroy()
            res.send(computer)
        } catch (error) {
            res.status(500).send({
                error: 'The computer information was incorrect'
            })
        }
    },

    async show(req, res) {
        try {
            const computer = await Computer.findByPk(req.params.computerId)
            res.send(computer)
        } catch (error) {
            res.status(500).send({
                error: 'The computer information was incorrect'
            })
        }
    }
}