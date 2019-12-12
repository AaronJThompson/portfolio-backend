const { gql } = require('apollo-server-express');

module.exports = gql`
  type Project {
    id: ID!
    title: String!
    img_src: String!
    git_link: String
    deploy_link: String
    short_desc: String!
    article: String
  }

  extend type Query {
    projects: [Project]
  }
`