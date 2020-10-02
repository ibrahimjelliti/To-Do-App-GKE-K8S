import express from 'express';
import * as todoController from '../controllers/todo.server.controller';

// express router instance
const router = express.Router();

// HTTTP Verbs on root path
router.route('/')
     .get(todoController.getTodos)
     .post(todoController.addTodo)
     .put(todoController.updateTodo);

// HTTP Verbs on :id provided
router.route('/:id')
      .get(todoController.getTodo)
      .delete(todoController.deleteTodo);


export default router;
