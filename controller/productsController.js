import {getProductsDB, getProductDB, insertProductDB,deleteProductDB, updateProductDB} from '../model/productsDB.js'
// import { getUserDB } from '../model/usersDB.js'

const fetchProducts = async(req,res)=>{
    res.json(await getProductsDB())
}

const getProduct = async(req,res)=>{
    res.json(await getProductDB(req.params.id))
}

const insertProduct = async(req,res)=>{
    let {productName,quantity,amount,category,productUrl}  = req.body
        res.send('Data was inserted successfully')
        await insertProductDB(productName,quantity,amount,category,productUrl)
}
const deleteProduct = async(req,res)=>{
    res.json(await deleteProductDB(req.params.id))
}

const updateProduct = async(req,res)=>{
    // res.json(await updateProductDB(req.params.id))
    let {productName,quantity,amount,category,productUrl} = req.body
    let products = await getProductDB(req.params.id)
    console.log(products);
   productName?productName=productName: productName = products.productName 
   quantity ?quantity=quantity: quantity = products.quantity
   amount ?amount=amount: amount = products.amount
   category ?category=category: category = products.category
   productUrl ?productUrl=productUrl: productUrl = products.productUrl


    await updateProductDB(productName,quantity,amount,category,productUrl,req.params.id)
    res.send('Data was updated successfully')
}


export {fetchProducts, getProduct, insertProduct,deleteProduct,updateProduct}