class FrontController{

    static home=(req,res)=>{
        res.send('homepage')
    }

    static about=(req,res)=>{
        res.send('about')
    }

    static contact=(req,res)=>{
        res.send('contact')
    }
}
module.exports = FrontController