const { MongoClient, ServerApiVersion } = require('mongodb');
const dotenv = require('dotenv');

dotenv.config();
const url = process.env.database;
const dbName = 'employee_db';

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(url, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function connectdb() {
    try {
        // Connect the client to the server (optional starting in v4.7)
        await client.connect();
        console.log("You successfully connected to MongoDB!");
        return client; // Return the client for external use
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error; // Rethrow the error for handling in the calling code
    }
}

function getClient() {
    if (!client) {
        throw new Error('Database client not initialized. Call connectToDatabase() first.');
    }
    return client;
}

module.exports = { connectdb,dbName, getClient };
