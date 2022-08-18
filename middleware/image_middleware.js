const multer  = require('multer')
const path = require('path')

//image upload code
var Storage= multer.diskStorage({   
    destination:"./public/upload/",
    filename:(req,file,cb)=>{
      cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname));
    }
  });
//middle ware
const upload = multer({
    storage:Storage

}).single('image123')//this name will be same as name in input tag of image

module.exports = upload