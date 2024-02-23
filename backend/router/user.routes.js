const express = require('express')
const { userController } = require('../controllers/user.controller')
const userRouter = express.Router()

userRouter.get('/', userController.getAll)
userRouter.post('/login', userController.login)
userRouter.post('/register', userController.register)
userRouter.put('/:id', userController.edit)
userRouter.delete('/:id', userController.delete)

module.exports = userRouter