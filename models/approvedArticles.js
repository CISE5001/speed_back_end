// models/Article.js

const mongoose = require('mongoose');

const approvedArticlesSchema = new mongoose.Schema(
    {
      dateSubmitted: String,
      articleTitle: String,
      status: String,
  },
  {
      timestamps: true,
  }
  );
  
  module.exports = approvedArticles = mongoose.model("approvedArticles", approvedArticlesSchema);