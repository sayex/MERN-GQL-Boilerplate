const mongoose = require("mongoose");


mongoose.connect(process.env.MONGODB_URI|| "mongodb://127.0.0.1/mern-gql-boiler-plate");

module.exports = mongoose.connection