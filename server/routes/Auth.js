const express = require("express");
const router = express.Router();
const passport = require("passport");
const createError = require("../utils/error")

const { login } = require("../controllers/auth");

const CLIENT_URL = "https://repclone.netlify.app";

router.get("/login/success", login)

router.get("/login/failed", (req, res, next) => {
    next(createError(404, "Authentication Failed!"))
});

router.get("/logout", (req, res) => {
    req.session = null
    req.logout();
    res.redirect(CLIENT_URL);
});

router.get('/steam', passport.authenticate("steam", { scope: ["profile"] }));;

router.get("/steam/return", passport.authenticate("steam", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
}));

module.exports = router;