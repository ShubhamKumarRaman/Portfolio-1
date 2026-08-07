const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        if (!process.env.MONGODB_URI) {
            throw new Error("MONGODB_URI is missing. Add it to server/.env");
        }

        const connection = await mongoose.connect(process.env.MONGODB_URI);

        console.log(`MongoDB connected: ${connection.connection.host}`);

        return connection;
    } catch (error) {
        console.error(`MongoDB connection error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;