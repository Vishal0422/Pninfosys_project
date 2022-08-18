const express = require('express');
const connectDB = require('./db/connectdb.js');

const app = express() //method
var session = require('express-session');
var flash = require('connect-flash');
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
  }));
app.use(flash())
const port = process.env.PORT || 3000
var bodyParser = require('body-parser')//body parser used to take the data
app.use(bodyParser.urlencoded({ extended: false }))//used to get data in url and convert to json format
//router link
const web = require('./routes/web.js')

//load router
app.use('/',web);
//set ejs template engine
app.set('view engine','ejs');
app.use(express.static('public'))//used for static files like css and img

connectDB();




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
