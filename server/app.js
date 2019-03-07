const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('cmongodb+srv://CaptainFinn2016:Shank%211989@cluster0-gyi2z.azure.mongodb.net/test?retryWrites=true');
mongoose.connection.once('open', () => {
    console.log('connected to database');
});

app.use('/graphql'.graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('Now listening');
});