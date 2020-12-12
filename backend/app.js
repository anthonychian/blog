const mongo = require('./config/mongodb');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')


var cors = require('cors')
var authRouter = require('./routes/api/v1/auth');
var blogRouter = require('./routes/api/v1/blog');
var userRouter = require('./routes/api/v1/user');

app.use(cors())
app.use(cookieParser())

mongo.connectMongoDB();

app.use(express.json({extended: false}))
app.use(express.static('../frontend/public'))
app.use(bodyParser.urlencoded({extended: false}))

app.use('/auth', authRouter);
app.use('/blog', blogRouter);
app.use('/user', userRouter);


module.exports = app;