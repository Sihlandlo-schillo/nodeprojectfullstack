import {getProductsDB, getProductDB} from '../model/productsDB.js'
// import { getUserDB } from '../model/usersDB.js'

const fetchProducts = async(req,res)=>{
    res.json(await getProductsDB())
}

const getProduct = async(req,res)=>{
    res.json(await getProductDB(req.params.id))
}


export {fetchProducts, getProduct}