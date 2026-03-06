import express from 'express'

const app = express()
app.listen(8080, ()=>{console.log('server is running')})
app.set('view engine','ejs')
app.set('views','views')

const users = [
    {
        name:'Sripad',
        email:'sripad@gmail.com',
        password:'1234',
    },
    {
        name:'Navdeep',
        email:'navdeep@gmail.com',
        password:'1234',
    },
    {
        name:'Sathvik',
        email:'sathvik@gmail.com',
        password:'1234',
    },
]


app.get('/',(req,res)=>{
    res.render('dashboard',{users});
});

app.get('/login',(req,res)=>{
    res.render('login');
});

app.get('/register',(req,res)=>{
    res.render('register');
});
