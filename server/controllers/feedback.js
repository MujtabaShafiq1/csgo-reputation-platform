const Feedback = require("../models/Feedback")
const createError = require("../utils/error");

async function getFeedbacks(req, res, next) {
    try {
        const { text, type, skip, limit } = req.query;

        const feedbacks = await Feedback.aggregate([
            {
                $lookup: {
                    from: 'users',
                    localField: 'steamUser',
                    foreignField: 'userId',
                    as: 'postedUser',
                }
            },
        ]).limit(+limit).skip(+skip).sort({ [text]: +type, _id: -1 })
        res.status(200).json(feedbacks)
    } catch (e) {
        next(createError(404, "No feedbacks available :("))
    }
};

async function singleUserFeedback(req, res, next) {

    try {
        const { text, type } = req.query;
        const feedbacks = await Feedback.aggregate([
            {
                $match: {
                    steamUser: req.params.id
                }
            },
            {
                $lookup: {
                    from: 'users',
                    localField: 'userId',
                    foreignField: 'userId',
                    as: 'postedUser',
                }
            },
        ]).sort({ [text]: +type })
        res.status(200).json(feedbacks)
    } catch (e) {
        next(createError(404, "No feedbacks available :("))
    }
};


async function createFeedback(req, res, next) {
    try {
        const newFeedback = new Feedback(req.body)
        const savedFeedback = await newFeedback.save();
        res.status(200).json(savedFeedback)
    } catch (err) {
        next(err)
    }
};

async function deleteFeedback(req, res, next) {
    try {
        await Feedback.findByIdAndDelete(req.params.id);
        res.status(200).json("Feedback Deleted")
    } catch (err) {
        next(err)
    }
};

async function getUserFeedbackCount(req, res, next) {
    try {
        const positive = await Feedback.countDocuments({ rate: "Positive", steamUser: req.params.id })
        return res.status(200).json(positive)
    } catch (e) {
        next()
    }
}

async function getFeedbacksCount(req, res, next) {
    try {
        const positiveFeedbacks = await Feedback.countDocuments({ rate: "Positive" })
        const neutralFeedbacks = await Feedback.countDocuments({ rate: "Neutral" })
        return res.status(200).json({ positiveFeedbacks, neutralFeedbacks })
    } catch (e) {
        next()
    }
}

async function getTotalFeedbacks(req, res, next) {
    try {
        const feedbackCount = await Feedback.countDocuments()
        return res.status(200).json(feedbackCount)
    } catch (e) {
        next()
    }
}


module.exports = {
    getFeedbacks,
    singleUserFeedback,
    createFeedback,
    getUserFeedbackCount,
    getFeedbacksCount,
    getTotalFeedbacks,
    deleteFeedback
}