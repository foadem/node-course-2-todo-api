//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to mongodb server');
    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text: 'Close the door',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('unable to insert todo', err);
    //     }
    //     console.log(result.ops);
    // });

    // db.collection('Users').insertOne({
    //     name: 'Foad',
    //     age: 35,
    //     location: 'Lavasan'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('unable to insert user', err);
    //     }
    //     console.log(result.ops[0]._id.getTimestamp());
    // });

    client.close();
});