import projectModel from '../models/projectModel';
export default {
  Query: {
    async projects() {
      const projects = await projectModel.find({}).exec();
      return projects;
    }
  }
}