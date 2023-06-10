const AdminModel =require('../../Model/AdminModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const flash=require('connect-flash')
const path=require('path')

//For Admin-Sign-up
exports.adminsignup = (req, res) => {
    //res.json(req.body)
    AdminModel({
        name:req.body.name,
        email:req.body.email,
        password:bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10)),
    }).save((error,admin) => {
        if (!error) {
            console.log("Admin Register Successfully",admin);
            req.flash("message", "Admin Register  Successfully...");
            res.redirect("/admin/register");
        } else {
            console.log("Admin Not Added",error);
            req.flash("error", "Admin not register");
            res.redirect("/admin/register");
        }
    })
}

//For Admin Log_In
exports.adminsignin = (req, res) => {
    AdminModel.findOne({
        email: req.body.email
    }, (error, data) => {
        if (data) {
            const hashPassword = data.password;
            if (bcrypt.compareSync(req.body.password, hashPassword))
             {
                const token = jwt.sign({
                    id: data._id,
                    name: data.name
                }, "Sohini", { expiresIn: '10m' });
                res.cookie("TokenModel", token);
                    console.log(data);
                    res.redirect("/admin/dashboard");
                } else {
                    console.log("Invalid Password and Email");
                    req.flash("message", "Invalid Password or Email");
                    res.redirect("/admin");
                }
            } 
        })
    }