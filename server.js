const express = require('express');
const path = require('path');
const testCollection = require('./public/model/model');
const { log } = require('console');
 
require('./public/db/db')

let initial_path = path.join(__dirname, "public");

let template_path = path.join(__dirname, "public/template/views");


let app = express();

app.use(express.static(initial_path));

app.set('view engine','ejs');

app.set('views',template_path);

app.use(express.urlencoded({extended : false}));

app.get('/', (req, res) => {
    res.sendFile(path.join(initial_path, "index.html"));
})

app.get('/test', (req, res) => {
    res.sendFile(path.join(initial_path, "test.html"));
})

app.get('/index', (req, res) => {
    res.render('index');
})



app.post('/testresult', async (req, res) => { 
    try{
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const gender = req.body.gender;
    const age  = req.body.age;
    const result = req.body.result;
    const testresult = new testCollection({
        name : name,
        email : email,
        phone : phone,
        gender : gender,
        age : age,
        result : result,
    });

    await testresult.save();
    res.render('home')        
    }catch(error){
        res.status(401).send(error);
    }
})

app.get('/show',async(req,res)=>{
     testCollection.find({}).then(function(data) {
        res.render('show',{
            datalist : data
        })
    })
    .catch(function(err){
        console.log(err);
    })
});

app.use((req, res) => {
    res.json("404");
})
app.listen(5000, () => {
    console.log('listening on port 5000......');
})