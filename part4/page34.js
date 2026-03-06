import express from 'express'
import session from 'express-session'

const app = express()
app.listen(8080, ()=>{console.log('server is running')})
app.set('view engine','ejs')
app.set('views','views')
app.use(express.urlencoded({extended:true}));

app.use(
    session({
        secret:'mySecretKey',
        resave:false, // if true it resaves the session id even if no chnage in session id
        saveUninitialized:false, //if true then a default junk session key is created 
    }),
);

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
    if(req.session.user){
        res.render('dashboard',{users});
    }
    else{
        res.redirect('/login');
    }
});

app.get('/login',(req,res)=>{
    res.render('login',{error: null});
});

app.post('/login',(req,res)=>{
    const {email,password} = req.body
    const user = users.find(user=>user.email===email)
    if (user){
        if (user.password === password){
            req.session.user = user //session id gets created after 1st login (session id is available in inspect->application->cookies)
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
