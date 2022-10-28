const { Router } = require('express');

const UsersController = require('../controllers/UsersController');

const usersController = new UsersController();

const usersRoutes = Router();

const ensureAuthenticated = require('../middleware/ensureAuthenticated')

usersRoutes.post('/', usersController.create);
usersRoutes.put('/', ensureAuthenticated, usersController.update);

module.exports = usersRoutes;