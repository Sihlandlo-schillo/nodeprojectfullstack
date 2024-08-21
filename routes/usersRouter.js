import express from 'express'
import {  fetchUsers, getUser,insertUser,deleteUser,updateUser, loginUser } from '../controller/usersController.js'
import { checkUser } from '../middleware/middlewareAuthentication.js'
// import exp from 'constants'

const router = express.Router()

router.post('/signIn', checkUser,loginUser)
router.get('/', fetchUsers)
router.get('/:id',getUser)
router.post('/insert',insertUser)
router.delete('/delete/:id', deleteUser)
router.patch('/update/:id', updateUser)

export default router