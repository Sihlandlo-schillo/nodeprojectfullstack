import {pool} from '../config/config.js'

const getProductsDB = async()=>{
    let [data] = await pool.query('SELECT * FROM products')
    return data
}
const getProductDB = async (id)=>{
    //add the [] on '[data]'for removing the array square bracket
    let [[data]] = await pool.query('SELECT * FROM products WHERE product_id = ?',[id])
    return data
}

const insertProductDB= async(productName,quantity,amount,category,productUrl)=>{
    let [data] = await pool.query('INSERT INTO products (productName,quantity,amount,category,productUrl) VALUES (?,?,?,?,?)',[productName,quantity,amount,category,productUrl])
    return data
}

const deleteProductDB= async (id)=>{
    // we don't have to have 'let = [data] ...' as we only deleting, we don't want it to return anything as fetch
    let [data] = await pool.query('DELETE FROM products WHERE product_id = ?',[id])
    return data
}

const updateProductDB = async (productName,quantity,amount,category,productUrl, id)=>{
    let [data] = await pool.query('UPDATE products SET productName = ?, quantity = ?, amount = ?, category = ?, productUrl = ? WHERE product_id = ?', [productName,quantity,amount,category,productUrl,id])
    return data
}

export {getProductsDB, getProductDB,insertProductDB,deleteProductDB,updateProductDB}