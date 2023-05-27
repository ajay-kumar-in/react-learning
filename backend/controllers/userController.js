"use strict"

const db = require('../config/sequelize');
// const bcrypt = require('bcrypt');
const constants = require('../config/constants');
const jwt = require('jsonwebtoken');
const userModel = db.users;
const { sendWelcomeEmail } = require('../emails/emailAccount');
const generalConfig = require('../config/generalConfig');

const createUser = async (req, res, next) => {
    // var saltRounds = bcrypt.genSaltSync(10);
    // var passwordHash = bcrypt.hashSync(req.body.password, saltRounds);
    let passwordHash = generalConfig.encryptPassword(req.body.password);
    const { firstName, lastName, email, mobile, password, address } = req.body;
    const user = {
        firstName: firstName,
        lastName: lastName,
        mobile: mobile,
        email: email,
        password: passwordHash,
        address: address
    }

    try {
        const createdUser = await userModel.create(user);
        // sendWelcomeEmail(req.body.email, req.body.firstName);

        res.status(201).send({ createdUser: createdUser, message: 'user created successfully' });
    } catch {
        res.status(500).send({ message: 'User already registered !' })
    }
}

const loginUser = async (req, res, next) => {
    const { email, password } = req.body;
    if (email) {
        let passwordMatchFlag
        const user = await userModel.findOne({ attributes: ['firstName', 'lastName', 'email', 'mobile', 'password', 'address'], where: { email: email } });

        if (user) {
            // passwordMatchFlag = bcrypt.compareSync(password, user.password);
            passwordMatchFlag = generalConfig.comparePassword(password, user.password)
        }

        if (!user) {
            return res.status(401).send({ message: 'Please enter coorrect email and password   11111111 !' });
        } else if (passwordMatchFlag) {
            const jwToken = jwt.sign({ email: user.email, id: user.id }, process.env.JWT_PRIVATE_KEY, { expiresIn: "30m" });
            user.password = undefined;
            return res.status(200).send({ message: 'Loggedin nsuccessfully !', user, token: jwToken, expirationDuration: 1800 })
        } else {
            return res.status(401).send({ message: 'Please enter coorrect email and password    22222222 !' });
        }
    }
}


module.exports = {
    createUser,
    loginUser,
}