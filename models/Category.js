const mongoose = require('mongoose')

// schema or fields
const CategorySchema = new mongoose.Schema({
    catname:{
        type:String,
        Required:true,
    }
       
},{timestamps:true})
// create model

const CategoryModel = mongoose.model('category',CategorySchema);//blog is name of collection

module.exports = CategoryModel
