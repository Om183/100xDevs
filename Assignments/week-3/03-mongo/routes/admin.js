const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post('/signup', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    Admin.create({
        username: username,
        password: password
    })
    .then(()=>{
        res.json({
            message: "Admin created successfully",
        })
    })

});

router.post('/courses', adminMiddleware, async (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;
    //zod

    const newCourse = await Course.create({
        title: title,
        description: description,
        imageLink: imageLink,
        price: price
    })
    
    res.json({
        message:"Course Created Successfully",
        courseId: newCourse._id
    })

});

router.get('/courses', adminMiddleware, (req, res) => {
    Course.find({})
    .then((response)=>{
        res.json({
            courses: response
        })
    })
});

module.exports = router; 