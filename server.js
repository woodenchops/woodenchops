const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const connectDB = require('./config/db');

// routes

const bootcamps = require('./routes/bootcamp');

// load env vars

dotenv.config({ path: './config/config.env'});

// connect to DB

connectDB();

const app = express();

// Body Parser

app.use(express.json());

// load middlewares

const logger = require('./middleware/logger');

// use middleware

app.use(logger);

// mount routes 

app.use('/api/v1/bootcamps', bootcamps)

const PORT = process.env.PORT || 5000

const server = app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.green.bold));

// handle unhandled promised rejections 

process.on('unhandledRejection', (err, promise) => {
    console.log(`Err: ${err.message}`.red);
    server.close(() => process.exit(1));
})