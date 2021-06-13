const express = require('express')
const mongoose = require('mongoose')
//const session = require('express-session')


const app = express();
//mongoose.connect('mongodb://localhost/userAuthentication', {useNewUrlParser:true})

//const User = require('./server/models/users')


app.use(express.static(__dirname+'/public/dist/public'))
//app.set('views engine', 'ejs')
//app.set('views', __dirname+'/views')
app.use(express.json())
app.use(express.urlencoded({useNewUrlParser:true}))
// app.use(session({
//     secret: 'secretKey',
//     resave: false,
//     saveUninitialized: true,
//     cookie: {maxAge:50000}
// }))

//routing

require('./server/config/routes.js')(app)

app.listen(8000, function(){
    console.log('listening on localhost 8000')
})