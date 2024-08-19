import express from 'express'
import cors from 'cors'
// import the router
import usersRouter from './routes/usersRouter.js'
import productsRouter from './routes/productsRouter.js'

let port = process.env.PORT || 6161

const app = express()
app.use(cors({
    // BELOW, allow backend to accept information (also on front-end 'store')
    origin:'http://localhost:8081',
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