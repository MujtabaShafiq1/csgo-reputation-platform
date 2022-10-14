const mongoose = require("mongoose");

const ReportSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
        },
        userId: {
            type: String,
            required: true,
        },
        reportedUser: {
            type: String,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Report", ReportSchema);