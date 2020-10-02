import Todo from '../models/todo.server.model';

// Get list of Todo 
export const getTodos = (req,res) => {
  Todo.find().exec((err,todos) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }

    return res.json({'success':true,'message':'Todos fetched successfully',todos});
  });
}
// Add new Todo
export const addTodo = (req,res) => {
  const newTodo = new Todo(req.body);
  newTodo.save((err,todo) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }

    return res.json({'success':true,'message':'Todo added successfully',todo});
  })
}

// UPDATE Todo by Id
export const updateTodo = (req,res) => {
  Todo.findOneAndUpdate({ _id:req.body.id }, req.body, { new:true }, (err,todo) => {
    if(err){
    return res.json({'success':false,'message':'Some Error','error':err});
    }
    return res.json({'success':true,'message':'Updated successfully',todo});
  })
}

// Get Todo by Id
export const getTodo = (req,res) => {
  Todo.find({_id:req.params.id}).exec((err,todo) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }
    if(todo.length){
      return res.json({'success':true,'message':'Todo fetched by id successfully',todo});
    }
    else{
      return res.json({'success':false,'message':'Todo with the given id not found'});
    }
  })
}

// Delete Todo by Id
export const deleteTodo = (req,res) => {
  Todo.findByIdAndRemove(req.params.id, (err,todo) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }

    return res.json({'success':true,'message':todo.todoText+' deleted successfully'});
  })
}
