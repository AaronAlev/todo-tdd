const mongoose = require('mongoose');
require('dotenv').config();

async function connect() {
    try {
        await mongoose.connect(
            process.env.SECRET,
            { useNewUrlParser: true }
        );
    } catch (error) {
        console.error('Error connecting to MongoDB');
        console.error(error);
    }
}

module.exports = { connect };