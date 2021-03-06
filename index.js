const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
//Import Routes
const authRoute = require('./routes/auth');

dotenv.config();

//Coonect to DB
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => console.log('connected to db'));

//Middleware
app.use(express.json());

//Route middleware
app.use('/api/user', authRoute);
app.listen(8080, () => console.log('Server Up and Running'));
