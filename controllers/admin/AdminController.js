class AdminController{
    static Dashboard =(req,res)=>{
        const{username,email} = req.user

        res.render('admin/dashboard',{n1:username,e:email})
    }
}
module.exports = AdminController