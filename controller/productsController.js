import {getProductsDB, getProductDB, insertProductDB,deleteProductDB, updateProductDB} from '../model/productsDB.js'
// import { getUserDB } from '../model/usersDB.js'

const fetchProducts = async(req,res)=>{
    res.json(await getProductsDB())
}

const getProduct = async(req,res)=>{
    res.json(await getProductDB(req.params.id))
}

const insertProduct = async(req,res)=>{
    try{
        let {productName,quantity,amount,category,productUrl,productDescription}  = req.body
            res.send('Data was inserted successfully')
            await insertProductDB(productName,quantity,amount,category,productUrl,productDescription)
    }catch(err){
        res.status(500).json({message:err.message})
    }
}
const deleteProduct = async(req,res)=>{
    try{
        await deleteProductDB(req.params.id)
    }
    catch(err){
        console.log(err);
        res.status(404).json({message:err.message})
    }
    
    
}

const updateProduct = async(req,res)=>{
    // res.json(await updateProductDB(req.params.id))
    try{
        let {productName,quantity,amount,category,productUrl,productDescription} = req.body
        let products = await getProductDB(req.params.id)
        console.log(products);
       productName?productName=productName: productName = products.productName 
       quantity ?quantity=quantity: quantity = products.quantity
       amount ?amount=amount: amount = products.amount
       category ?category=category: category = products.category
       productUrl ?productUrl=productUrl: productUrl = products.productUrl
       productDescription ?productDescription=productDescription: productDescription = products.productDescription
    
    
        await updateProductDB(productName,quantity,amount,category,productUrl,productDescription,req.params.id)
        res.send('Data was updated successfully')

    } catch(err){
        console.log(err);
        res.status(500).send('Error updating data')
        
    }
}


export {fetchProducts, getProduct, insertProduct,deleteProduct,updateProduct}