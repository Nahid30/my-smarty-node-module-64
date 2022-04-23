const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;


app.use(cors());

app.use(express.json());

app.get('/', (req, res) =>{
    res.send('Hello from my own personal smart nice beautiful pant !!!!!!')
});

const users = [
    {id:1, name:'sabana', email:'sabana@gmail.com', phone:'0178888888'},
    {id:2, name:'sabnoor', email:'sabnoor@gmail.com', phone:'0178888888'},
    {id:3, name:'shuchorita', email:'shuchorita@gmail.com', phone:'0178888888'},
    {id:4, name:'shuchonda', email:'shuchonda@gmail.com', phone:'0178888888'},
    {id:5, name:'srabonti', email:'srabonti@gmail.com', phone:'0178888888'},
    {id:6, name:'sabila', email:'sabila@gmail.com', phone:'0178888888'},
    {id:7, name:'shohana', email:'shohana@gmail.com', phone:'0178888888'},
]


app.get('/users',(req, res)=>{
    res.send(users)
})

app.get('/user/:id', (req, res)=>{
    console.log(req.params);
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})


app.post('/users', (req, res) =>{
    console.log('Request',req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
})

app.listen(port, ()=> {
    console.log('Listening To Port', port)
})