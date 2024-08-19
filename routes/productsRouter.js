import express from 'express'
import {fetchProducts,getProduct, insertProduct,deleteProduct} from '../controller/productsController.js'
// import { verifyAToken } from '../middleware/middlewareAuthentication.js'
// import { addToCartDB } from '../model/fruitDB.js'

const router = express.Router()

// router.post('/cart',verifyAToken, addToCart)

router.get('/',fetchProducts)
router.get('/:id',getProduct)
router.post('/insert',insertProduct)
router.delete('/:id', deleteProduct)
// router.patch('/:id', updateFruit)


export default router