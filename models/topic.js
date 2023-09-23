// models/Book.js

const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema(
  {
    title: String,
    authors: String,
    source: String,
    pubyear: String,
    doi: String,
    claim: String, 
    evidence: String
},
{
    timestamps: true,
}
);

module.exports = Topic = mongoose.model("Topic", topicSchema);