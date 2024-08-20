import express from 'express'
import {fetchProducts,getProduct, insertProduct,deleteProduct, updateProduct} from '../controller/productsController.js'
// import { verifyAToken } from '../middleware/middlewareAuthentication.js'
// import { addToCartDB } from '../model/fruitDB.js'

const router = express.Router()

// router.post('/cart',verifyAToken, addToCart)

router.get('/',fetchProducts)
router.get('/:id',getProduct)
router.post('/insert',insertProduct)
router.delete('/delete/:id', deleteProduct)
router.patch('/update/:id', updateProduct)


export default router