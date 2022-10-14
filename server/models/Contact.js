const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema(
    {
        reason: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        message: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Contact", ContactSchema);