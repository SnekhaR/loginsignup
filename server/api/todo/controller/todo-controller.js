"use strict";

const TodoDAO = require('../dao/todo-dao');

module.exports = class TodoController {
  static getAll(req, res) {
      TodoDAO
        .getAll()
        .then(todos => res.status(200).json(todos))
        .catch(error => res.status(400).json(error));
  }
  static createSignup(req, res) {
      let _x = req.body;
      console.log(req.body);
      TodoDAO
        .createSignup(_x)
        .then(x => res.status(201).json(x))
        .catch(error => res.status(400).json(error));
  }

  static createTodo(req, res) {
      let _todo = req.body;

      TodoDAO
        .createTodo(_todo)
        .then(todo => res.status(201).json(todo))
        .catch(error => res.status(400).json(error));
  }

  static deleteTodo(req, res) {
    let _id = req.params.id;

    TodoDAO
      .deleteTodo(_id)
      .then(() => res.status(200).end())
      .catch(error => res.status(400).json(error));
  }
}
