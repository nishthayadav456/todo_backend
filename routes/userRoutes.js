const { signup, login } = require('../controllers/userController');
const {loginvalidation,signupvalidation}=require('../middlewares/userValidation')

const userRoutes=require('express').Router()
userRoutes.post('/login',loginvalidation,login)
userRoutes.post('/signup',signupvalidation,signup)

module.exports=userRoutes;