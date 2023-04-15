const UserModel = require('../../models/User')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


class UserController{
    static register = async(req,res)=>{
        res.render('user/registration',{message:req.flash('error')})
        
    }

    static registerinsert = async(req,res)=>{
        //console.log(req.body)
        const{username,email,password,confirm_password}=req.body;
        const user = await UserModel.findOne({email:email})
        //console.log(user)
        if(user){
            req.flash('error','this email is already registered')
            return res.redirect('/register')

        }else{
            if(username && email && password && confirm_password){
                if(password === confirm_password){
                    try{
                        const salt = await bcrypt.genSalt(10)
                        const hashpassword = await bcrypt.hash(password,salt)
                        const result = new UserModel({
                            username:username,
                            email:email,
                            password:hashpassword,
                        })
                        await result.save()
                        req.flash('success','Regsitration Successful!Login Here.')
                        return res.redirect('/login')
                    }catch(err){
                        console.log(err)
                    }
                }else{
                    req.flash('error','password does not match')
                    return res.redirect('/register')
                }
            }else{
                req.flash('error','all fields are required')
                return res.redirect('/register')

            }
            
        }
        
        

    }

    static Verifylogin = async(req,res)=>{
        //console.log(req.body)
        try{
            const{email,password}=req.body
            const User = await UserModel.findOne({email:email})
            //console.log(User)
            if(User!=null){
                const isMatch = await bcrypt.compare(password,User.password)
                if((User.email == email)&&isMatch){
                    //generate token
                    
                    const token = jwt.sign({ userid: User._id}, 'vishalsikarwaritmgwalior');
                    //console.log(token)
                    res.cookie('jwt',token)
                    res.redirect('/admin/dashboard')
                }else{
                    req.flash('error','email and password does not match')
                    res.redirect('/login')
                }
            }else{
                req.flash('error','You are not a registerd user')
                res.redirect('/login')
            }
        }catch(err){
            console.log(err)
        }
        
    }

    static Logout = async(req,res)=>{
        try{
            res.clearCookie('jwt')
            res.redirect('/')
            
        }catch(err){
            
            console.log(err)
        }
    }


}

module.exports = UserController