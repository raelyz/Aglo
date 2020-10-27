const mongoose = require('mongoose')

const Schema = mongoose.Schema

const apiSchema = new Schema({
    user_id: { type: String, required: true },
    user_name: { type: String, required: true },
    reddit: [mongoose.Schema.Types.Mixed],
    youtube: [mongoose.Schema.Types.Mixed],
    twitter: [mongoose.Schema.Types.Mixed],
    youtubeQueries: [mongoose.Schema.Types.Mixed]
}, {
    timestamps: true,
})

const Api = mongoose.model('Api', apiSchema)

module.exports = Api