// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
    if (err) {
        return console.log('Unable to connect to Mongodb server');
    }
    console.log('Connected to MongoDB server');

    //deleteMany
    // db.collection('Todos').deleteMany({text:'Something to do'}).then((result) => {
        // console.log(result);
    // });
    //deleteOne
    // db.collection('Todos').deleteOne({text:'Eat one'}).then((result) => {
    //     console.log(result);
    // });
    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed:false}).then((result) => {
    //     console.log(result);
    // });
    // db.collection('Users').findOneAndDelete({
    //     _id:new ObjectID('5a809ecae23b4f1758d047af')
    // }).then((result) => {
    //     console.log(result);
    // });
    db.collection('Users').deleteMany({
        name:'Victor'
    }).then((result) => {
        console.log(JSON.stringify(result,undefined,2));
    })
    db.close();
});