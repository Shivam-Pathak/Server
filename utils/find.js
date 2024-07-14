const mongoose = require('mongoose');

// Import your Mongoose models here
const User = require('../models/user/userSchema'); // Example import, replace with your actual model

// Function to find documents in the database
async function find(collectionName, query) {
    try {
        // Get the Mongoose model corresponding to the collection name
        const Model = mongoose.model(collectionName);
        // Query the database using the provided query
        const result = await Model.find(query);
        return result;
    } catch (error) {
        throw new Error(`Error finding documents in ${collectionName}: ${error.message}`);
    }
}

module.exports = { find };
