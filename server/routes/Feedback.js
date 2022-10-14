const express = require("express");
const router = express.Router();

const verifyCookie = require("../middlewares/verifyCookie");
const { getFeedbacks, createFeedback, singleUserFeedback, getFeedbacksCount, getUserFeedbackCount, getTotalFeedbacks , deleteFeedback} = require("../controllers/feedback");

router.get("/count" , getFeedbacksCount)
router.get("/total" , getTotalFeedbacks)
router.get("/", getFeedbacks)
router.post("/" ,verifyCookie, createFeedback)
router.get("/:id" , singleUserFeedback)
router.delete("/:id" ,verifyCookie, deleteFeedback)
router.get("/reps/:id" , getUserFeedbackCount)

module.exports = router;