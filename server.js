const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const path = require("path");
const cookieParser = require('cookie-parser');

require('dotenv').config();

// PORT is the envt variable for Heroku
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({
    extended: true
}));
app.use(cookieParser())

const clientBuildPath = path.join(__dirname, '/client/build')

// DB config
const uri = process.env.mongoURI
const connection = mongoose.connection;

// Connect to Mongo, useNewUrlParser etc is required due to deprecation
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    .catch(err => console.log(err));

connection.once('open', () => {
    console.log("MongoDB Database connection established successfully")
})

const apiRouter = require('./routes/api');
const usersRouter = require('./routes/user');

app.use('/api', apiRouter)
app.use('/users', usersRouter)

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));
    // Handle React routing, return all requests to React app
    app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'client/build', 'index.html')));
}

app.listen(port, () => console.log(`server started on port: ${port}`));