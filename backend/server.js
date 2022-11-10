const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();


const app = express();

app.use(express.json());

app.use('/api/auth', require('./routes/auth'));

const PORT =  5000;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })
    .then(() => {
        console.log('connected to mongodb');
        return app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
    })
    .catch(err => console.log(err.message));