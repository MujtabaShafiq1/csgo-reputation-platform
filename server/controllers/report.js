const Report = require("../models/Report")

async function createReport(req, res, next) {
    try {
        const newReport = new Report(req.body)
        const savedReport = await newReport.save();
        res.status(200).json(savedReport)
    } catch (err) {
        next(err)
    }
};

module.exports = {
    createReport
}