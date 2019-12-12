const projectModel = require('../models/projectModel');
module.exports = {
  Query: {
    async projects() {
      const projects = await projectModel.find({}).exec();
      return projects;
    }
  }
}