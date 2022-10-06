const { Router } = require('express');

const UsersController = require('../controllers/UsersController');

const usersController = new UsersController();

const usersRoutes = Router();

function myMiddleware(req, res, next) {

  console.log('Você passou pelo Middleware')

  next();

}

usersRoutes.post('/', myMiddleware, usersController.create);
usersRoutes.put('/:id', myMiddleware, usersController.update);

module.exports = usersRoutes;