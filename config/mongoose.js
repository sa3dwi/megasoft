const mongoose = require('mongoose');

const dbUrl = 'mongodb://localhost:27017/megasoft';
const env = 'development';

mongoose.Promise = Promise

mongoose.connection.on('error', (err) => {
    console.error(`MongoDB connection error: ${err}`)
    process.exit(-1)
});

if (env === 'development') {
    mongoose.set('debug', true)
};

module.exports.connect = () => {
    mongoose.connect(dbUrl, {
    keepAlive: 1,
    reconnectTries: 30,
    useFindAndModify: true,
    useCreateIndex: true,
    useNewUrlParser: true,
    // user: process.env.MONGO_USER,
    // pass: process.env.MONGO_PASSWORD,
    // auth: {
    //     authdb: process.env.MONGO_DB
    // }
    }).then(() => { return mongoose.connection },
        err => { console.log(err) }
    )
}