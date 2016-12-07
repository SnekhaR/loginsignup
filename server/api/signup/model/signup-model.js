"uson.ensureIndex( { email: 1 }, { unique: true } )db.collection.ensureIndex( { email: 1 }, { unique: true } )ict";

const mongoose = require('mongoose');

const _signupSchema = {firstname:String , lastname:String , email:{type:String,index:{unique:true}} , username:{type:String,index:{ unique:true}}, password:String
   
}

module.exports = mongoose.Schema(_signupSchema);

