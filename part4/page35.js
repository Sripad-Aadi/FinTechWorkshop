import express from 'express'
const app = express();
const Router = express.Router()
Router.get('/products',(req,res)=>{
    res.send('Hello world')
})
app.use('/',Router)
app.listen(5001,()=> console.log('server started'))