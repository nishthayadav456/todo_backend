const Joi = require('joi');

const signupvalidation=(req,res,next)=>{
    const schema=Joi.object({
        username: Joi.string().min(4).max(30).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(6).max(30).required()
    })
    const {error}=schema.validate(req.body);
    if(error){
        return res.status(400).send({message:"bad request",error})

    }
    next()
}
const loginvalidation=(req,res,next)=>{
    const schema=Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(6).max(30).required()
    })
    const {error}=schema.validate(req.body);
    if(error){
        return res.status(400).send({message:"bad request",error})

    }
    next()
}

  module.exports={signupvalidation,loginvalidation}