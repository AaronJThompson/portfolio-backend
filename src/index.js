const express = require('express');
const cors = require('cors');
const fs = require('fs');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const typeDefs = require('./schemas');
const projectModel = require('./models/projectModel');
const resolvers = require('./resolvers/projectResolver');
const projects = require('../content/projects');

mongoose.connect('mongodb://localhost/portfolio', {useNewUrlParser: true});

const addProjects = async () => {
  try {
    await projectModel.remove({}).exec()
    await projectModel.insertMany(projects);
    console.log('Projects loaded in');
  } catch(e) {
    console.log(e);
    process.exit();
  }
}

var db = mongoose.connection;
db.on('error', ()=> {console.log( '---FAILED to connect to mongoose')})
db.once('open', async () => {
  console.log( '+++Connected to mongoose')
  await addProjects();
})


const app = express();
app.use(cors());

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app, path: '/graphql' });

app.listen(4000, () => {
  console.log(`Go to http://localhost:4000/graphql to run queries!`);
});