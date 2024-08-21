// Authenticate A USER

import { compare } from "bcrypt"
import { getUserDB } from "../model/usersDB.js"
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'


dotenv.config()

// const hashedPassword = 'password'

const checkUser = async(req,res,next)=>{
    const {email,password} = req.body
    let hashedPassword = (await getUserDB(email)).password
    console.log(hashedPassword);

    // let result = compare(password, hashedPassword)
    // if(result == true){
    //     next()
    // }else{
    //     res.send('Wrong Password Insertion')
    // }

    compare(password, hashedPassword, (err,result)=> {
        if(result==true){
            let token = jwt.sign({email:email},process.env.SECRET_KEY,{expiresIn:'1h'})
            console.log(token);
            req.body.token = token
            next()
            return
        }
        res.send('Wrong Password my G')
    })
}



export {checkUser}