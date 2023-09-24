// models/Article.js

const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema(
  {
    dateSubmitted: String,
    articleTitle: String,
    articleCitation: String,
    summary: String,
},
{
    timestamps: true,
}
);

module.exports = Topic = mongoose.model("Topic", topicSchema);