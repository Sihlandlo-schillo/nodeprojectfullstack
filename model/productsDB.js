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


export {getProductsDB, getProductDB}