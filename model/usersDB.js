import {pool} from '../config/config.js'

const getUsersDB = async()=>{
    let [data] = await pool.query('SELECT * FROM users')
    return data
}

const getUserDB = async (username)=>{
    //add the [] on '[data]'for removing the array square bracket
    let [[data]] = await pool.query('SELECT * FROM users WHERE firsName = ?',[username])
    return data
}


export {getUsersDB, getUserDB}