import express from 'express'
import { redirect } from 'react-router-dom'

const app = express()
app.listen(8080, ()=>{console.log('server is running')})
app.set('view engine','ejs')
app.set('views','views')
app.use(express.urlencoded({extended:true}));

let users = [
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
    res.render('login',{error: null});
});

app.post('/login',(req,res)=>{
    const {email,password} = req.body
    const user = users.find(user=>user.email===email)
    if (user){
        if (user.password === password){
            res.redirect('/')
        }
        else{
            res.render('login',{ error: "Invalid Password"})
        }
    }
    else{
        res.render('login',{ error: "User not found" })
    }
});

app.get('/register',(req,res)=>{
    res.render('register');
});

app.post('/register',(req,res)=>{
    users = [...users,req.body]
    res.redirect('/')
});
