const express = require('express');
const app = express();
const path = require('path');
const sunflower = require('./model/model');
const vp = path.join(__dirname,"../template/views");
require('./db/db');
let port = 3000;
app.set('view engine' , 'hbs');
app.set('views',vp);
//app.use(express.json());
app.use(express.urlencoded({extended:false}));

//app.use(express.urlencoded());

app.get('/' ,(req,res)=>{
    res.render('index');
})
app.post('/empdata', async (req, res) => {
    const password = req.body.password;
    const cpassword = req.body.cpassword;
    try {
        if (password === cpassword) {
            const emd = new sunflower({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                age: req.body.age,
                password: req.body.password,
                cpassword: req.body.cpassword
            });
            const pd = await emd.save();
            res.send(pd);
        } else {
            res.send("password not matching...");
        }
    } catch (error) {
        res.send(error);
    }
});


  
/*app.post('/empdata', async (req, res) => {
    console.log(req.body);
    res.send(req.body.age);
});*/
app.listen(port ,() =>{
    console.log("listening...");
})
