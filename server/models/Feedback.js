const mongoose = require("mongoose");

const FeedbackSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        steamUser: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        amount: {
            type: Number,
        },
        rate: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
        game: {
            type: String,
        },
        order: {
            type: String,
            required: true,
        },
        method: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Feedback", FeedbackSchema);