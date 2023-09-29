const express = require('express')
const userController = require('../controllers/userController')

const userRouter = express.Router()


userRouter.post('/register', userController.handleRegister)
userRouter.post('/login', userController.handleLogin)

module.exports = userRouter