const CategoryModel = require("../../models/Category")

class CategoryController{
    static CreateCategory =(req,res)=>{
        res.render('admin/category/createcategory')
    }

    static Categoryinsert =async(req,res)=>{
        try{
            const{catname}=req.body
            const result = new CategoryModel({
                catname:catname

            })
            await result.save()
            res.redirect('/admin/displaycategory')//route ka url jispe apko pochana h user ko
            console.log(result)

        }catch(err){
            console.log(err)
        }
    }

    static DisplayCategory =async(req,res)=>{

        try{
            const result = await CategoryModel.find()
             console.log(result)
             res.render('admin/category/displaycategory',{data:result})
             
            
        }catch(err){
            console.log(err)
        }
    }

    static EditCategory =async(req,res)=>{
        // res.render('admin/blog/displayblog')
        try{
            const result = await CategoryModel.findById(req.params.id)
             console.log(result)
            res.render('admin/category/editcategory',{data:result})
        }catch(err){
            console.log(err)
        }
    }

    static UpdateCategory =async(req,res)=>{

        try{
            const result = await CategoryModel.findByIdAndUpdate(req.params.id,req.body)
             //console.log(result)
             //res.render('admin/category/editcategory')
             res.redirect('/admin/displaycategory')//isme vo route aata h jis page p jana h vo bi web.js m se
             
            
        }catch(err){
            console.log(err)
        }
    }

    static Deletecategory =async(req,res)=>{
        // res.render('admin/blog/displayblog')
        // console.log(req.params.id)
        // console.log(req.body)
        try{
            const result = await CategoryModel.findByIdAndDelete(req.params.id)
            //  console.log(result)
            res.redirect('/admin/displaycategory');
        }catch(err){
            console.log(err)
        }
    }
}
module.exports = CategoryController