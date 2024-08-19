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

const insertProductDB= async(fruit_name, weight,amount)=>{
    let [data] = await pool.query('INSERT INTO fruits (fruit_name,weight,amount(R)) VALUES (?,?,?)',[fruit_name, weight,amount])
    return data
}

const deleteProductDB= async (id)=>{
    // we don't have to have 'let = [data] ...' as we only deleting, we don't want it to return anything as fetch
    let [data] = await pool.query('DELETE FROM fruits WHERE fruits_id = ?',[id])
    return data
}

export {getProductsDB, getProductDB,insertProductDB,deleteProductDB}