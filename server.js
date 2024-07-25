const express = require('express');
const bodyParse = require('body-parser');
const mongooose = require('mongoose');
const route = require('./route/pages')
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParse.urlencoded({extended: true}));
app.use('/', route);

mongoose.connect("mongodb+srv://yesminh:ba1lkW6l7Ap58qkJ@cluster0.zu09zdf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    
})
.then(() => {
    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    })
})