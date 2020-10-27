const router = require('express').Router();
const { OAuth2Client } = require('google-auth-library');
const jwt = require('jsonwebtoken');

const client = new OAuth2Client(process.env.OAuth2)

let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json(err))
})

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const newUser = new User({ username });
    newUser.save()
        .then(() => res.json('User Added!'))
        .catch(err => res.status(400).json(err))
})

router.route('/googlelogin').post((req, res) => {
    const { tokenId } = req.body
    client.verifyIdToken({ idToken: tokenId, audience: process.env.OAuth2 }).then(response => {
        console.log(response.payload)
        const { email_verified, name, email } = response.payload;
        if (email_verified) {
            User.findOne({ email }).exec((err, user) => {
                if (err) {
                    return res.status(400).json({
                        error: "Something went wrong"
                    })
                } else {
                    if (user) {
                        const { _id, name, email } = user
                        const token = jwt.sign({ email_verified, name, email }, process.env.jwtKEY, { expiresIn: '1h' })
                        res.status(200).json({ _id, name })
                    } else {
                        const newUser = new User({ name, email });
                        newUser.save()
                            .then((item) => res.json(item))
                            .catch(err => {
                                console.log(err)
                                res.status(400).json(err)
                            })
                    }
                }
            })
        }
    }).catch(err => res.status(400).json(err))
})

module.exports = router