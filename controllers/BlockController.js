const BlogModel = require('../models/Blog')
const CategoryModel = require('../models/Category')

class BlockController{
    static Home =async(req,res)=>{
        try{
            const result = await BlogModel.find()
            //console.log(result)
            res.render('home',{data:result})
        }catch(err){
            console.log(err)
        }
         // Function is rendering the following written files inside the bracket
    }
    static detail =async (req,res)=>{
       
        try{
            //console.log(req.params.id)
            const result= await BlogModel.findById(req.params.id)
            const catname= await CategoryModel.find()
            //console.log(result)
            res.render('detail',{data:result,cat:catname})
            
        }catch(err){
            console.log(err)
        }
    }

    static About =(req,res)=>{
        res.render('about')
    }
    
    static Contact =(req,res)=>{
        res.render('contact')
    }
    static Blog = async(req,res)=>{
        try{
            const result = await BlogModel.find()
             console.log(result)
            res.render('blog',{data:result})
        }catch(err){
            console.log(err)
        }
        
    }
    static login =(req,res)=>{
        res.render('login',{message:req.flash('error')})
    }
    
}



module.exports = BlockController