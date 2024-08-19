import {getUsersDB, getUserDB} from '../model/usersDB.js'
// import {hash} from 'bcrypt'


const fetchUsers = async(req,res)=>{
    res.json(await getUsersDB())
}
const getUser = async(req,res)=>{
    res.json(await getUserDB(req.params.id))
}
export {fetchUsers, getUser}