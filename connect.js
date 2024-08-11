const mongoose = require("mongoose");

// Async function to connect to MongoDB
async function connectTomongodb(url) {
    return mongoose.connect(url); // Return the promise from mongoose.connect()
}

// Export the connectTomongodb function
module.exports = {
    connectTomongodb,
};
