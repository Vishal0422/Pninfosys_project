const express = require('express')
const BlockController = require('../controllers/BlockController')
const FrontController = require('../controllers/FrontController')
const AdminController = require('../controllers/admin/AdminController')
const BlogController = require('../controllers/admin/BlogController')
const CategoryController = require('../controllers/admin/CategoryController')
const CurdController = require('../controllers/CurdController')
const ContactController = require('../controllers/admin/ContactController')
const router = express.Router()
const aboutmiddleware = require('../middleware/aboutmiddleware')
const image_middleware = require('../middleware/image_middleware')//about middleware
const UserController = require('../controllers/user/UserController')


//router create
// router.get('/',FrontController.home)

// router.get('/about',FrontController.about)

// router.get('/contact',FrontController.contact)
//block controller route
router.get('/',BlockController.Home)
router.get('/about',BlockController.About)
router.get('/contact',BlockController.Contact)
router.get('/blog',BlockController.Blog)
router.get('/login',BlockController.login)
router.get('/detail/:id',BlockController.detail)
// admin controller
router.get('/admin/dashboard',AdminController.Dashboard)
//admin blogController
router.get('/admin/createblog',BlogController.CreateBlog)
router.post('/bloginsert',image_middleware,BlogController.bloginsert)
router.get('/admin/blogdisplay',BlogController.DisplayBlog)
router.get('/admin/viewblog/:id',BlogController.Viewblog)
router.get('/admin/editblog/:id',BlogController.Editblog)
router.post('/admin/blogupdate/:id',image_middleware,BlogController.Updateblog)
router.get('/admin/deleteblog/:id',BlogController.Deleteblog)




//admin/CategoryController
router.get('/admin/createcategory',CategoryController.CreateCategory)
router.get('/admin/displaycategory',CategoryController.DisplayCategory)
router.post('/categoryinsert',CategoryController.Categoryinsert)
router.get('/admin/editcategory/:id',CategoryController.EditCategory)
router.post('/admin/updatecategory/:id',CategoryController.UpdateCategory)
router.get('/admin/editcategory/:id',CategoryController.EditCategory)
router.get('/admin/deletecategory/:id',CategoryController.Deletecategory)

// curd controller
router.get('/curd/create',CurdController.Createform)
router.post('/curd/insert',CurdController.Insertdata)
router.get('/curd/display',CurdController.DisplayCurd)
router.get('/curd/view/:id',CurdController.Curdview)

//admin contactController
router.post('/contact',ContactController.Contactinsert)
router.get('/curd/contacttable',ContactController.Contactdisplay)

//User Controller
router.get('/register',UserController.register)
router.post('/registerinsert',UserController.registerinsert)
router.post('/verifylogin',UserController.Verifylogin)
router.get('/logout',UserController.Logout)

module.exports = router;

