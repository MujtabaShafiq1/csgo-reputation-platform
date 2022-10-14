const User = require("../models/User")
const createError = require("../utils/error")

async function login(req, res, next) {
    try {
        if (req.user) {
            const existingUser = await User.find({ userId: req.user.id })
           
            const { id, displayName, photos } = req.user
            const user = { userId: id, name: displayName, url: `https://steamcommunity.com/profiles/${id}`, img: photos[2].value }
            
            if (existingUser.length === 0) {
                const newUser = new User(user)
                await newUser.save()
                return res.status(201).json(user)
            } else {
                return res.status(200).json(user)
            }
        }
    } catch (err) {
        next(createError(404, "Authentication Failed"))
    }
}

module.exports = { login }