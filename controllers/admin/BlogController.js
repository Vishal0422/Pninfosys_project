const BlogModel = require("../../models/Blog")
const CategoryModel = require("../../models/Category")

class BlogController{
    static CreateBlog =async(req,res)=>{
        res.render('admin/blog/createblog')
    }

    static bloginsert =async(req,res)=>{
        // console.log(req.body)
        try{
            const{title,description,image}=req.body
            const result = new BlogModel({
                title:title,
                description:description,
                image:req.file.filename

            })
            //saving data
            await result.save()
            res.redirect('/admin/createblog')//route ka url jispe apko pochana h user ko
            console.log(result)
        }catch(err){
            console.log(err)
        }
    }

    static DisplayBlog =async(req,res)=>{
        // res.render('admin/blog/displayblog')
        try{
            const result = await BlogModel.find()
            // console.log(result)
            res.render('admin/blog/displayblog',{data:result})
        }catch(err){
            console.log(err)
        }
    }

    static Viewblog =async(req,res)=>{
        // res.render('admin/blog/displayblog')
        try{
            const result = await BlogModel.findById(req.params.id)
             //console.log(result)
            res.render('admin/blog/viewblog',{data:result})
        }catch(err){
            console.log(err)
        }
    }

    static Editblog =async(req,res)=>{
        // res.render('admin/blog/displayblog')
        try{
            const result = await BlogModel.findById(req.params.id)
             //console.log(result)
            res.render('admin/blog/editblog',{data:result})
        }catch(err){
            console.log(err)
        }
    }

    static Updateblog =async(req,res)=>{
        // res.render('admin/blog/displayblog')
         //console.log(req.params.id)
         //console.log(req.body)
        try{
            if(req.file){
                var imagefile = req.file.filename
            }
            const result = await BlogModel.findByIdAndUpdate(req.params.id,{
                title:req.body.title,
                description:req.body.description,
                image:imagefile
            })

            //  console.log(result)
            res.redirect('/admin/blogdisplay');
        }

        catch(err){
            console.log(err)
        }
    }

    static Deleteblog =async(req,res)=>{
        // res.render('admin/blog/displayblog')
        // console.log(req.params.id)
        // console.log(req.body)
        try{
            const result = await BlogModel.findByIdAndDelete(req.params.id)
            //  console.log(result)
            res.redirect('/admin/blogdisplay');
        }catch(err){
            console.log(err)
        }
    }

    


    

    
}
module.exports = BlogController