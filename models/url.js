const mongoose = require("mongoose");

// Enforce strict query filters to be objects
mongoose.set('strictQuery', true);

// Define the URL schema
const urlSchema = new mongoose.Schema({
  shortid: {
    type: String,
    required: true,
    unique: true
  },
  redirecturl: {
    type: String,
    required: true
  },
  visithistory: [
    {
      timestamp: {
        type: Number
      }
    }
  ]
}, {
  timestamps: true // Automatically add createdAt and updatedAt fields
});

// Create the model from the schema
const url = mongoose.model("url", urlSchema);

// Export the model
module.exports = url;


