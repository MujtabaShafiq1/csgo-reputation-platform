const express = require("express");
const router = express.Router();

const { getUserById, getUserCount} = require("../controllers/user");

router.get("/count" , getUserCount)
router.get("/:id" , getUserById)

module.exports = router;