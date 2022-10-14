const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieSession = require("cookie-session");
const passport = require("passport");
require("dotenv").config()

const app = express();
app.use(express.json())

app.enable("trust proxy");

app.use(cookieSession({ name: "session", keys: [process.env.COOKIE_KEY], maxAge: 24 * 60 * 60 * 100, sameSite: "none", secure: true, proxy: true }));

app.use(cors({ origin: "https://repclone.netlify.app", methods: "GET,POST,PUT,DELETE,OPTIONS", credentials: true, }));

app.use(passport.initialize());
app.use(passport.session());
require("./passport");

const userRouter = require("./routes/User")
const authRouter = require("./routes/Auth")
const reportRouter = require("./routes/Report")
const feedbackRouter = require("./routes/Feedback")
const contactRouter = require("./routes/Contact")

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/report", reportRouter);
app.use("/api/contact", contactRouter);
app.use("/api/feedback", feedbackRouter);

app.get("/", (req, res) => {
    res.json("server start")
})


app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong";
    return res.status(errorStatus).json({ message: errorMessage })
})


const connect = () => {
    mongoose.connect(process.env.MONGODB)
        .then(() => console.log(`Connected to MongoDB...`))
        .catch((error) => console.log(`Connection problem : ${error}`))
}

const port = process.env.PORT || 8080;
app.listen(port, () => {
    connect();
    console.log(`Listening to port : ${port}`);
})