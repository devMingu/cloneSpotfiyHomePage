const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res)=>{
    res.render('music/home');
})


const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("LISTENING ON PORT 3000");
})