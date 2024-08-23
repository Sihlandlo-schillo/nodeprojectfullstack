// Authenticate A USER

import pkg from 'bcryptjs';
const { compare } = pkg;
import { loginUserDB } from "../model/usersDB.js"
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'


dotenv.config()

// const hashedPassword = 'password'

const checkUser = async(req,res,next)=>{
    const {email,password} = req.body
    let hashedPassword = (await loginUserDB(email)).password
    //  (await loginUserDB(password)).email
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
        res.status(400).send('Wrong Password')
    })
}



export {checkUser}