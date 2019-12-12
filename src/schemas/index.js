const projectSchema = require('./projectSchema');
const { gql } = require('apollo-server');

const linkSchema = gql`
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
`;

export default [linkSchema, projectSchema];