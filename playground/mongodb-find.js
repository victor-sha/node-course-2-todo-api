// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
    if (err) {
        return console.log('Unable to connect to Mongodb server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5a80946f82c2380e10e87dde')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // },(error) => {
    //     console.log('Unable to fetch todos', error);
    // });
    // db.collection('Todos').find().count().then((count) => {
    //     console.log('Todos count:',count);
    // },(error) => {
    //     console.log('Unable to fetch todos', error);
    // });
    db.collection('Users').find({name:'Victor'}).toArray().then((user) => {
        console.log(JSON.stringify(user,undefined,2));
    },(err) => {
        console.log('Unable to fetch users', err);
    });
    db.close();
});