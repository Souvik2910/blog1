const express = require('express');

const Auth_Admin_Route=express.Router()
const AuthController=require('../../Controller/Admin/AuthController');

Auth_Admin_Route.post("/adminsignup",AuthController.adminsignup);
Auth_Admin_Route.post("/adminsignin",AuthController.adminsignin);

module.exports = Auth_Admin_Route;