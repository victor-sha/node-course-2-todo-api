// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
    if (err) {
        return console.log('Unable to connect to Mongodb server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id:ObjectID('5a81e499dec24508a4d0a048')
    // },{$set:{
    //     completed: true   
    // }},{
    //     returnOriginal: true
    // }).then((result) => {
    //     console.log(result);
    // })
    
    db.collection('Users').findOneAndUpdate({
        _id:ObjectID('5a8095e5f74331235ce05d2d')
    },{$set:{name: 'Victor'},
       $inc:{age: 1}
    },{returnOriginal:true}).then((result) => {
        console.log(result);
    });

    db.close();
});