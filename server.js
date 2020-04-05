const express = require('express');
const dotenv = require('dotenv');

// routes

const bootcamps = require('./routes/bootcamp');

// load env vars

dotenv.config({ path: './config/config.env'});

const app = express();

// load middlewares

const logger = require('./middleware/logger');

// use middleware

app.use(logger);

// mount routes 

app.use('/api/v1/bootcamps', bootcamps)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));