const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', (req, res) => {
        
    username = req.body.username;
    password = req.body.password;

    User.create({
        username:username,
        password:password
    })
    .then(()=>{
        res.json({
            msg:"User Created Successfully"
        })
    })
});

router.get('/courses', async(req, res) => {
    const response = await Course.find({

    })
    res.json({
        courses: response,
    })
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    const courseId = req.params.courseId;
    const username = req.headers.username;
    await User.updateOne({
        username:username
    },{
        "$push":{
            purchasedCourses: courseId,
        }
    })
    res.json({
        msg: "purchase complete"
    })

});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    const user = User.findOne({
        username: req.headers.username,
    })
    const courses = await Course.find({
        _id:{
            "$in": user.purchasedCourses,
        }
    })
    res.json({
        courses: courses,
    })
});

module.exports = router