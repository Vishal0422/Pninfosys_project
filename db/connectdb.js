const mongoose = require('mongoose');

const url = "mongodb+srv://vssikarwar:vssikarwar0422@cluster0.qxjye6c.mongodb.net/Blog_website?retryWrites=true&w=majority"
//con = "mongodb+srv://vssikarwar:vssikarwar0422@cluster0.qxjye6c.mongodb.net/Bloggerweb?retryWrites=true&w=majority"
const connectDB =()=>{
    //return mongoose.connect('mongodb://localhost:27017/blog_website')
    return mongoose.connect(url)
    .then(()=>{
        console.log('Connection successful')
    })
    .catch((err)=>{
        console.log(err)
    })
}

module.exports = connectDB