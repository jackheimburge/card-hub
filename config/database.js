const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;

db.on('connected', function() {
    console.log(`connected to ${db.name} at ${db.host}`);
})