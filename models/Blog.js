const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema({
    id: String,
    title: String,
    content: String
    })  

const BlogModel = mongoose.model("blog", blogSchema)
module.exports  = BlogModel