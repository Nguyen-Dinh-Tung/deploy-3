import { Request , Response } from "express";
import { Router } from "express";
import AuthServices from '../controllers/auth.controller'
const authRouter = Router() ;

const showHomePage = async(req : Request , res : Response) =>{
  res.status(200).json({
    message : 'Connected'
  })
}

const signUpHandler = async (req : Request , res : Response) =>{
  let data = req.body ;
  const reponse = await AuthServices.createNewUser(req,res , data)
  res.json({
    reponse
  })
}

const signInHandler = async (req : Request , res : Response) =>{
  let data = req.body ;
  const reponse = await AuthServices.signIn(req,res,data) ;
  res.json({
    reponse
  })
}
const changePassWorld = async (req : Request , res : Response) =>{
  let data = req.body ;
  const reponse = await AuthServices.changePassWorld(data) ;
  res.json({
    reponse
  })
}
const removeCustomerHandler = async (req : Request , res : Response) =>{
  let email : any = req.query.email ;
  const response = await AuthServices.removeCustomer(email )
  res.json({
    response
  })

}
const voteHandler = async (req : Request , res : Response) =>{
  let data = req.body
}
authRouter.get('/' , showHomePage) ;
authRouter.post('/sign-up' , signUpHandler) ;
authRouter.post('/sign-in' , signInHandler);
authRouter.put('/change-passworld' , changePassWorld);
authRouter.delete('/remove-customer' , removeCustomerHandler)
authRouter.post('/vote' , voteHandler)

export default authRouter