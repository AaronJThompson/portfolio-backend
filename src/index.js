import express from 'express';
import cors from 'cors';
import fs from 'fs';
import { ApolloServer } from 'apollo-server-express';
import mongoose from 'mongoose';
import typeDefs from './schemas';
import projectModel from './models/projectModel';
import resolvers from './resolvers';

mongoose.connect('mongodb://localhost/portfolio', {useNewUrlParser: true});

const addProjects = async () => {
  const projects = fs.readFileSync(__dirname + '/content/projects.json', 'utf-8');
  try {
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