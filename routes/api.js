const router = require('express').Router();
let Api = require('../models/api.model');

router.route('/').post((req, res) => {
    console.log(req.body)
    const user_id = req.body._id
    Api.findOne({ user_id }).exec((err, user) => {
        console.log(user)
        if (user) {
            console.log(user)
            res.json(user)
        } else {
            res.json(err)
        }
    })
})

router.route('/add').post((req, res) => {
    const { user_id, user_name, reddit, youtube, twitter, youtubeQueries } = req.body;

    Api.findOne({ user_id }).exec((err, user) => {
        if (err) {
            return res.status(400).json({
                error: "Something went wrong"
            })
        } else {
            if (user) {
                if (reddit) {
                    user.reddit.push(reddit)
                }
                youtube.forEach(item => {
                    if (item) {
                        user.youtube.push(item)
                    }
                })
                if (twitter) {
                    user.twitter.push(twitter)
                }
                user.youtubeQueries.push(youtubeQueries)
                console.log(user)
                user.save()
                    .then((item) => { console.log(item); res.json(item) })
                    .catch(err => {
                        console.log(err);
                        res.status(400).json(err)
                    })
            } else {
                console.log('M IN ELSE')
                const newAPI = new Api({ user_id, user_name, reddit, youtube, twitter });

                newAPI.save()
                    .then(() => res.json('User Data Updated!'))
                    .catch(err => {
                        console.log(err)
                        res.status(400).json(err)
                    })
            }
        }
    })
})

module.exports = router