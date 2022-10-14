const createError = require("../utils/error")

module.exports = function verifyCookie(req, res, next) {
    try {
        if (req.isAuthenticated()) return next();
        throw new Error();
    } catch (e) {
        next(createError(401, "Authentication Failed"))
    }
}
