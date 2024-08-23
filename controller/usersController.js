import {getUsersDB, getUserDB, insertUserDB,deleteUserDB, updateUserDB, loginUserDB} from '../model/usersDB.js'
import pkg from 'bcryptjs';
const {hash} = pkg;

const fetchUsers = async(req,res)=>{
    res.json(await getUsersDB())
}
const getUser = async(req,res)=>{
    try{
        res.json(await getUserDB(req.params.id))
    }catch(err){
        res.status(400).send('Could not get that user')
    }
}

const insertUser = async(req,res)=>{
    
    try{
        let {firstName,lastName,userAge,gender,role,email,password,profile}  = req.body
    //     let emailDB = await loginUserDB(email)
    //    if (email==emailDB) {
    //     res.send('Email already exists')
    //     return
        hash(password,10,async(err,hashedP)=>{
            if(err) throw err
            console.log(hashedP);
            
            await insertUserDB(firstName,lastName,userAge,gender,role,email,hashedP,profile)
        })
        res.status(200).send('Data was inserted successfully')

    }catch(err){
        res.status(400).send('Error occured while adding a user')
    }
   }

const deleteUser = async(req,res)=>{
    try{
        res.json(await deleteUserDB(req.params.id))
        res.statu(200).send('Deleted user successfully')
    }catch(err){
        res.status(400).send(err.message)
    }
}

const updateUser = async(req,res)=>{
    let {firstName,lastName,userAge,gender,role,email,password,profile} = req.body
    try{
        let users = await getUserDB(req.params.id)
        console.log(users);
       firstName?firstName=firstName: firstName = users.firstName
       lastName ?lastName=lastName: lastName = users.lastName
       userAge ?userAge=userAge: userAge = users.userAge
       gender ?gender=gender: gender = users.gender
       role ?role=role: role = users.userRole
       email ?email=email: email = users.email
       password ?password=password: password = users.password
       profile ?profile=profile: profile = users.userProfile
    
        await updateUserDB(firstName,lastName,userAge,gender,role,email,password,profile,req.params.id)
        res.status(200).send('Data was updated successfully')

    }catch(err){
        res.status(404).send('Error occured while updating the user')
    }
}

const loginUser = async(req,res)=>{
    try{
        res.json({message:"You have signed In Successfully",token:req.body.token})
    }catch(err){
        res.status(400).send('Error occured while logging in')
    }
}

export {fetchUsers, getUser,insertUser,deleteUser,updateUser,loginUser}