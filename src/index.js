const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

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

const typeDefs = gql`
  type Query { projects: [Project] }
  type Project { img_src: String, title: String, git_link: String, deploy_link: String, short_desc: String }
`;

const resolvers = {
  Query: { projects: () => projects },
};

const app = express();

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

app.listen(4000, () => {
  console.log(`Go to http://localhost:4000/${server.graphqlPath} to run queries!`);
});