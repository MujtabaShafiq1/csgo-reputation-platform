const express = require("express");
const router = express.Router();

const verifyCookie = require("../middlewares/verifyCookie");
const { createReport } = require("../controllers/report");

router.post("/" , verifyCookie, createReport)

module.exports = router;