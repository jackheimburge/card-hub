// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
const Card = require('./models/card');
const Order = require('./models/order');
