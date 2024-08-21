import {pool} from '../config/config.js'

const getUsersDB = async()=>{
    let [data] = await pool.query('SELECT * FROM users')
    return data
}

const getUserDB = async (email)=>{
    //add the [] on '[data]'for removing the array square bracket
    let [[data]] = await pool.query('SELECT * FROM users WHERE email = ?',[email])
    return data
}

const insertUserDB = async(firstName,lastName,userAge,gender,role,email,password,profile)=>{
    let [data] = await pool.query('INSERT INTO users (firstName, lastName, userAge, gender, userRole, email, password, userProfile) VALUES (?,?,?,?,?,?,?,?)',[firstName,lastName,userAge,gender,role,email,password,profile])
    return data
}

const deleteUserDB = async (id)=>{
    // we don't have to have 'let = [data] ...' as we only deleting, we don't want it to return anything as fetch
    let [data] = await pool.query('DELETE FROM users WHERE user_id = ?',[id])
    return data
}

const updateUserDB = async (firstName,lastName,userAge,gender,role,email,password,profile, id)=>{
    let [data] = await pool.query('UPDATE users SET firstName = ?, lastName = ?, userAge = ?, gender = ?, userRole = ?, email = ?, password = ?, userProfile = ? WHERE user_id = ?', [firstName,lastName,userAge,gender,role,email,password,profile,id])
    return data
}






export {getUsersDB, getUserDB, insertUserDB, deleteUserDB, updateUserDB}