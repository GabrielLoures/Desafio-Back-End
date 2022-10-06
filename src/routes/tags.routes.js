const { Router } = require('express');

const TagsController = require('../controllers/TagsController');

const tagsController = new TagsController();

const tagsRoutes = Router();

function myMiddleware(req, res, next) {

  console.log('Voce passou pelo Middleware')

  next();

}

tagsRoutes.get("/:user_id", myMiddleware, tagsController.index);

module.exports = tagsRoutes;