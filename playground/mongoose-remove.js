
const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result)=>{
//     console.log(result);
    
// });

// Todos.findOneAndRemove
// Todos.findByIdAndRemove
Todo.findOneAndRemove({ _id:'5ae07607fe8ecb1400df9fd3' }).then(()=>{
    console.log(todo);
});

Todo.findByIdAndRemove.then((todo)=>{
    console.log(todo)
})