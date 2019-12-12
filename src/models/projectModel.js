const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  img_src: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true,
  },
  git_link: {
    type: String
  },
  deploy_link: {
    type: String
  },
  short_desc: {
    type: String,
    required: true
  },
  article: {
    type: String
  }
});

const project = mongoose.model('project', projectSchema);

module.exports = project;