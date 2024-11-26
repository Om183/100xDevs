const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://omwarkad97:k1aklJBmlUuBwkqm@cluster0.8bpdy.mongodb.net/course_selling_app?retryWrites=true&w=majority&appName=Cluster0");
 
const AdminSchema = new mongoose.Schema({
    email: String,
    password: String,
})

const UserSchema = new mongoose.Schema({
    email: String,
    password: String,
    purchasedCourses:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Course"
    }]
})

const CourseSchema = new mongoose.Schema({
    title: String,
    description: String,
    imageLink: String,
    price: Number
})

const Admin = mongoose.model("Admin",AdminSchema);
const User = mongoose.model("User",UserSchema);
const Course = mongoose.model("Course",CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}