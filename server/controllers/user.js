const User = require("../models/User")
const Feedback = require("../models/Feedback")
const createError = require("../utils/error")


async function getUserById(req, res, next) {
    try {
        const user = await User.find({ userId: req.params.id })
        const positive = await Feedback.countDocuments({ rate: "Positive", steamUser: req.params.id })
        const neutral = await Feedback.countDocuments({ rate: "Neutral", steamUser: req.params.id })

        if (user.length === 0) {
            throw new Error()
        }
        return res.status(200).json({ ...user, positive, neutral })
    } catch (e) {
        next(createError(404, "User not found"))
    }
}

async function getUserCount(req, res, next) {
    try {
        const users = await User.countDocuments()
        return res.status(200).json(users)
    } catch (e) {
        next()
    }
}

module.exports = {
    getUserById,
    getUserCount
}

