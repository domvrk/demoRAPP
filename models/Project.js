const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Post
let Project = new Schema({
  title: {
    type: String
  },
  body: {
    type: String
  }
},{
    collection: 'projects'
});

module.exports = mongoose.model('Project', Project);
