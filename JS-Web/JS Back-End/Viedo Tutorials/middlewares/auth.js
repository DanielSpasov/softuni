const jwt = require('jsonwebtoken')
const { COOKIE_NAME, SECRET } = require('../config/index')

function auth(req, res, next) {
    let token = req.cookies[COOKIE_NAME]
    if (token) {
        jwt.verify(token, SECRET, function (err, decoded) {
            if (err) {
                res.clearCookie(COOKIE_NAME)
            } else {
                req.user = decoded
                res.locals.user = decoded
                res.locals.isAuthenticated = true
            }
        })
    }

    next()
}

module.exports = auth