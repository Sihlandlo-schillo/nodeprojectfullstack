import {getProductsDB, getProductDB, insertProductDB,deleteProductDB} from '../model/productsDB.js'
// import { getUserDB } from '../model/usersDB.js'

const fetchProducts = async(req,res)=>{
    res.json(await getProductsDB())
}

const getProduct = async(req,res)=>{
    res.json(await getProductDB(req.params.id))
}

const insertProduct = async(req,res)=>{
    let {fruit_name,weight,amount}  = req.body
        res.send('Data was inserted successfully')
        await insertProductDB(fruit_name,weight,amount)
}
const deleteProduct = async(req,res)=>{
    res.json(await deleteProductDB(req.params.id))
}

export {fetchProducts, getProduct, insertProduct,deleteProduct}