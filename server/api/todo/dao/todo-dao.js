"use strict";

const mongoose = require('mongoose');
const Promise = require('bluebird');
const todoSchema = require('../model/todo-model');
const _ = require('lodash');

todoSchema.statics.getAll = () => {
    return new Promise((resolve, reject) => {
        let _query = {};

        Todo
          .find(_query)
          .exec((err, todos) => {
              err ? reject(err)
                  : resolve(todos);
          });
      });
}
todoSchema.statics.createSignup = (x) => {
    return new Promise((resolve, reject) => {
console.log("im in dao");
     

      let _x = x;
console.log(_x);

      _x.save((err, saved) => {
        err ? reject(err)
            : resolve(saved);
      });
    });
}
todoSchema.statics.createTodo = (todo) => {
    return new Promise((resolve, reject) => {
      if (!_.isObject(todo))
          return reject(new TypeError('Todo is not a valid object.'));

      let _todo = new Todo(todo);

      _todo.save((err, saved) => {
        err ? reject(err)
            : resolve(saved);
      });
    });
}

todoSchema.statics.deleteTodo = (id) => {
    return new Promise((resolve, reject) => {
        if (!_.isString(id))
            return reject(new TypeError('Id is not a valid string.'));

        Todo
          .findByIdAndRemove(id)
          .exec((err, deleted) => {
              err ? reject(err)
                  : resolve();
          });
    });
}

const Todo  = mongoose.model('Todo', todoSchema);

module.exports = Todo;
