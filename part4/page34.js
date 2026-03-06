import express from 'express'

const app = express()
app.listen(8080, ()=>{console.log('server is running')})
app.set('view engine','ejs')
app.set('views','views')
app.get('/login',(req,res)=>{
    res.render('login');
});
app.get('/',(req,res)=>{
    res.render('login');
});
app.get('/register',(req,res)=>{
    res.render('register');
});
