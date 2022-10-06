const { Router } = require('express');

const NotesController = require('../controllers/NotesController');

const notesController = new NotesController();

const notesRoutes = Router();

function myMiddleware(req, res, next) {

  console.log('Voce passou pelo Middleware')

  next();

}

notesRoutes.post("/:user_id", myMiddleware, notesController.create);
notesRoutes.get("/:id", myMiddleware, notesController.show);
notesRoutes.delete("/:id", myMiddleware, notesController.delete);
notesRoutes.get("/", myMiddleware, notesController.index);

module.exports = notesRoutes;