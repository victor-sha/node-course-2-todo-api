
const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5a8f57c5ce8e8a6c27cd03562';

// if (!ObjectID.isValid(id)) {
//     console.log('Id is not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('todo', todo);
// }).catch((e) => console.log(e));

User.findById('5a81f49aad9c339827681ed4').then((user) => {
    if (!user) {
        console.log('User not found');
    }
    console.log('User', user);
}).catch((e) => console.log(e));