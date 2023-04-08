import { compare } from "bcryptjs"
import { prisma } from "../utils/prisma"
import { sign } from "jsonwebtoken"
import { Request, Response } from "express"


export class AuthController{

  async authenticate(req: Request, res: Response){
    const {email, password} = req.body

    const user = await prisma.user.findUnique({
      where: {
        email
      }
    })

    if(!user){
      return res.json({error: "User not found!"})
    }

    const isValidatePassword = await compare(password, user.password)

    if(!isValidatePassword){
      return res.json({ error: "Email or password invalid"})
    }

    const token = sign({id: user.id}, "keysecret", {expiresIn: "1h"})

    const {id, name} = user

    return res.json({user: {id, email, name}, token})
  }

}