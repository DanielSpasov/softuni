const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const { SALT_ROUNDS, SECRET } = require('../config/config')

const User = require('../Models/User')

const register = async ({ username, password }) => {
    let salt = await bcrypt.genSalt(SALT_ROUNDS)
    let hash = await bcrypt.hash(password, salt)

    const user = new User({ username, password: hash })

    return await user.save()
}

const login = async ({ username, password }) => {

    let user = await User.findOne({ username })

    if (!user) throw { message: 'User not found' }

    let isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) throw { message: 'Invalid password' }

    let token = jwt.sign({ _id: user._id, username: user.username, roles: ['admin'] }, SECRET)

    return token
}

module.exports = {
    register,
    login,
}
