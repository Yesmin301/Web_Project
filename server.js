const express = require('express');
const bodyParse = require('body-parser');
const mongooose = require('mongoose');
const route = require('./route/pages')
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParse.urlencoded({extended: true}));
app.use('/', route);

mongooose.connect("",{userNewURLParser: true, useUnifiedTopology: true})
.then(()=>{
    app.listen(3000,() =>{
        console.log("server is running on 3000")
    })
})