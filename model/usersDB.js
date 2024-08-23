import {pool} from '../config/config.js'

const getUsersDB = async()=>{
    try{
        let [data] = await pool.query('SELECT * FROM users')
        return data
    }catch(err){
        console.log(err)
    }
}

const getUserDB = async (id)=>{
    try {
        //add the [] on '[data]'for removing the array square bracket
        let [[data]] = await pool.query('SELECT * FROM users WHERE user_id = ?',[id])
        return data
    } catch (error) {
       res.status(400).send('Cannot get a user')
    }
}

const loginUserDB = async (email)=>{
    try{
        //add the [] on '[data]'for removing the array square bracket
        let [[data]] = await pool.query('SELECT * FROM users WHERE email = ?',[email])
        return data
    }catch(err){
        console.log(err)
    }
}

const insertUserDB = async(firstName,lastName,userAge,gender,role,email,password,profile)=>{
    try{
        let [data] = await pool.query('INSERT INTO users (firstName, lastName, userAge, gender, userRole, email, password, userProfile) VALUES (?,?,?,?,?,?,?,?)',[firstName,lastName,userAge,gender,role,email,password,profile])
        return data
    }catch{
        console.log(err)
    }
}

const deleteUserDB = async (id)=>{
    try{
        let [data] = await pool.query('DELETE FROM users WHERE user_id = ?',[id])
        return data
    }catch(err){
        console.log(err)
    }
    // we don't have to have 'let = [data] ...' as we only deleting, we don't want it to return anything as fetch
}

const updateUserDB = async (firstName,lastName,userAge,gender,role,email,password,profile, id)=>{
    try{
        let [data] = await pool.query('UPDATE users SET firstName = ?, lastName = ?, userAge = ?, gender = ?, userRole = ?, email = ?, password = ?, userProfile = ? WHERE user_id = ?', [firstName,lastName,userAge,gender,role,email,password,profile,id])
        return data
    }catch(err){
        console.log(err)
    }
}






export {getUsersDB, getUserDB, insertUserDB, deleteUserDB, updateUserDB,loginUserDB}