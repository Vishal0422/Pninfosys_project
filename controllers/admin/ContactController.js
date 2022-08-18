const { model } = require("mongoose")
const ContactModel = require("../../models/Contact")
class ContactController{
    static Contactinsert =async(req,res)=>{
        try{
            const{name,email,phone,message}=req.body
            const result = new ContactModel({
                name:name,
                email:email,
                phone:phone,
                message:message

            })
            await result.save()
            
            res.redirect('/')//route ka url jispe apko pochana h user ko
            console.log(result)

        }catch(err){
            console.log(err)
        }
    }

    static Contactdisplay =async(req,res)=>{
        try{
            const result = await ContactModel.find()
             console.log(result)
             res.render('curd/contacttable',{data:result})
             
            
        }catch(err){
            console.log(err)
        }
    }
}

module.exports=ContactController