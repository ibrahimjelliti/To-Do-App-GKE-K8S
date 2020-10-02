import mongoose from 'mongoose';
// mongo todos collection schema definition
/*
  {
    __id
    todoText
    todoDescription
    createdAt
  }
*/
var Schema = mongoose.Schema({
  createdAt:{
    type: Date,
    default: Date.now
  },
  todoText: String,
  todoDescription: String
});

export default mongoose.model('Todo', Schema);
