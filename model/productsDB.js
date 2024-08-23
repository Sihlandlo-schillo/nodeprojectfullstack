import {pool} from '../config/config.js'

const getProductsDB = async()=>{
    try{
        let [data] = await pool.query('SELECT * FROM products')
        return data
    }catch(err){
        console.log(err)
    }
}
const getProductDB = async (id)=>{
    try{
        //add the [] on '[data]'for removing the array square bracket
        let [[data]] = await pool.query('SELECT * FROM products WHERE product_id = ?',[id])
        return data
    }catch(err){
        console.log(err)
    }
}

const insertProductDB= async(productName,quantity,amount,category,productUrl,productDescription)=>{
    try{
        await pool.query('INSERT INTO products (productName,quantity,amount,category,productUrl,productDescription) VALUES (?,?,?,?,?)',[productName,quantity,amount,category,productUrl,productDescription])
    }catch(err){
        console.log(err)
    }
    // return data
}

const deleteProductDB= async (id)=>{
    try{
        // we don't have to have 'let = [data] ...' as we only deleting, we don't want it to return anything as fetch
        let [data] = await pool.query('DELETE FROM products WHERE product_id = ?',[id])
        return data
    }catch(err){
        console.log(err)
    }
}

const updateProductDB = async (productName,quantity,amount,category,productUrl,productDescription, id)=>{
    try{

        let [{data}] = await pool.query('UPDATE products SET productName = ?, quantity = ?, amount = ?, category = ?, productUrl = ?, productDescription = ? WHERE product_id = ?', [productName,quantity,amount,category,productUrl,productDescription,id])
        return data
    }catch(err){
        console.log(err)
    }
}

export {getProductsDB, getProductDB,insertProductDB,deleteProductDB,updateProductDB}