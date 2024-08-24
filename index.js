import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

// import the router
import usersRouter from './routes/usersRouter.js'
import productsRouter from './routes/productsRouter.js'

dotenv.config()

let port = process.env.PORT || 6161

const app = express()
app.use(cors({
    // BELOW, allow backend to accept information (also on front-end 'store')
    origin:'https://nodeprojectfullstack.web.app/',
    credentials:true
}))                                                                                                                                 
app.use(express.json())

app.use(express.static('public')) // Don't know what it is for
//use the router
app.use('/users', usersRouter)
app.use('/products', productsRouter)

app.listen(port,()=>{
    console.log('http://localhost:' +port);
})