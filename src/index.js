import express from 'express';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './schemas';
import resolvers from './resolvers';

// Test data
const projects = [
  {
    "img_src": "https://imgur.com/NjLjiJS.png",
    "title": "Sleep Tracker",
    "git_link": "https://github.com/build-week-sleep-tracker",
    "deploy_link": "https://bw-sleep-tracker-fe.netlify.com/",
    "short_desc": "Sleep Tracker is an app enabling users to track their sleep and receive feedback and recommendations on their sleep patterns. This was built by 6 developers in 1 week"
  },
  {
    "img_src": "https://imgur.com/nCcmSTl.png",
    "title": "Wunderlist 2.0",
    "git_link": "https://github.com/team-wunderlist",
    "short_desc": "This was my first build week at Lambda School. We were tasked with creating a list-keeping app to help manage people tasks throughout the day. I created the landing page and part of the React app"
  }
];

const app = express();
app.use(cors());

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app, path: '/graphql' });

app.listen(4000, () => {
  console.log(`Go to http://localhost:4000/graphql to run queries!`);
});