require('dotenv').config({ path: './.env' });

const express = require('express');
const userRoutes = require('./src/routes/userRoutes');
const listEndpoints = require('express-list-endpoints');
const cors = require('cors');
const morgan = require('morgan');
const session = require('express-session');
const errorHandler = require('./src/middleware/errorHandler');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({
  origin: process.env.FRONT_DOMAIN,
  credentials: true
}));

app.use(express.json());
app.use(morgan(process.env.NODE_ENV));
app.use(session({
  secret: process.env.SECRET_KEY , 
  saveUninitialized: true,
  resave:false,
  cookie: {
    secure: false, 
    maxAge: 1000 * 60 * 60 * 24,
    
  }}));

app.use('/api/users', userRoutes);

app.use(errorHandler);

console.log(listEndpoints(app));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
