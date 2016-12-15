"use strict";

const mongoose = require('mongoose');

const _authenticateSchema = {
  username: {type: String, required: true, index:true},
  createdAt: {type: Date, default: Date.now},
 password:{type:String,required:true}

}

module.exports = mongoose.Schema(_authenticateSchema);

