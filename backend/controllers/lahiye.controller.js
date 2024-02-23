const Tecnik = require("../models/lahiye.model")


const tecnikController = {
    getAll: async (req, res) => {
        try {
            const cards = await Tecnik.find({})
            res.send(cards)
        } catch (error) {
            res.send("err")
        }
    },
    getById: async (req, res) => {
        try {
            const { id } = req.params
            const target = await Tecnik.findById(id)
            res.send(target)
        } catch (error) {
            res.send("err")
        }
    },
    add: async (req, res) => {
        try {
            const { image, name, catagory, brand, endirim, satis } = req.body
            const newTecnik = new Tecnik({ image, name, catagory, brand, endirim, satis })
            await newTecnik.save()
            res.send(newTecnik)
        } catch (error) {
            res.send(error)
        }
    },
    edit: async (req, res) => {
        try {
            const { id } = req.params
            const { image, name, catagory, brand, endirim, satis } = req.body

            const update = await Tecnik.findByIdAndUpdate(id, { image, name, catagory, brand, endirim, satis })
            res.send(201).send(update)
        }
        catch (error) {
            res.status(404).send(error)
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params
            const deletedTarget = await Tecnik.findByIdAndDelete(id)
            res.send(deletedTarget)
        } catch (error) {
            res.send("err")
        }
    },
}

module.exports = tecnikController