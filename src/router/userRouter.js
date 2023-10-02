const express = require('express')
const userController = require('../controllers/userController')
const checkAuthentication = require('../middlewares/checkAuth')
const checkRoleUser = require('../middlewares/checkRole')
const userRouter = express.Router()


userRouter.post('/register', userController.handleRegister)
userRouter.post('/login', userController.handleLogin)
userRouter.get('/', checkAuthentication,checkRoleUser, userController.getAllUser)

module.exports = userRouter