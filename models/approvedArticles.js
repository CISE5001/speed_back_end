// models/Article.js

const mongoose = require('mongoose');

const approvedArticlesSchema = new mongoose.Schema(
  {
    dateSubmitted: String,
    articleTitle: String,
    articlePractice: String,
    articleClaim: String,
    articleEvidence: String,
    articleCitation: String,
    status: String,
  },
  {
      timestamps: true,
  }
  );
  
  module.exports = approvedArticles = mongoose.model("approvedArticles", approvedArticlesSchema);