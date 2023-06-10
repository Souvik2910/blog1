const express = require('express');

const Admin_Route = express.Router();
const AdminController = require('../../Controller/Admin/AdminController');

Admin_Route.get('/register',AdminController.admin_register);
Admin_Route.get('/',AdminController.admin_login);
Admin_Route.get('/dashboard',AdminController.adminindex);
Admin_Route.get('/blog',AdminController.blog);

Admin_Route.get('/team',AdminController.team);
Admin_Route.get('/teamadd',AdminController.team_add);
Admin_Route.post('/storeteam',AdminController.storeteam);
Admin_Route.get('/teamedit/:t_id',AdminController.team_edit);
Admin_Route.post('/teamupdate',AdminController.team_update);
Admin_Route.get('/teamdelete/:t_id',AdminController.team_delete);

Admin_Route.get('/service',AdminController.service);
Admin_Route.get('/client',AdminController.client);
Admin_Route.get('/feature',AdminController.feature);
Admin_Route.get('/logout',AdminController.logout);

module.exports = Admin_Route;