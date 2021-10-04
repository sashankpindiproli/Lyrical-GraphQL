const express = require('express');
const models = require('./models');
const expressGraphQL = require('express-graphql');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const schema = require('./schema/schema');

const app = express();

// Replace with your mongoLab URI
const MONGO_URI = "mongodb://sashy:llmfDNHsC757S9yN@lyrical-graphical-sashy-shard-00-00.acgcx.mongodb.net:27017,lyrical-graphical-sashy-shard-00-01.acgcx.mongodb.net:27017,lyrical-graphical-sashy-shard-00-02.acgcx.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-phc0xr-shard-0&authSource=admin&retryWrites=true&w=majority";

if ( !MONGO_URI )
{
    throw new Error('You must provide a MongoLab URI');
}

const options = {
    useMongoClient: true,
    autoIndex: false, // Don't build indexes
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0
};
mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI, options);
mongoose.connection
    .once('open', () => console.log('Connected to MongoLab instance.'))
    .on('error', error => console.log('Error connecting to MongoLab:', error));

app.use(bodyParser.json());
app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true
}));

const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');
app.use(webpackMiddleware(webpack(webpackConfig)));

module.exports = app;
