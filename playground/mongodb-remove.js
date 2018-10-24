const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// Todo.deleteMany({}).then((result) => {
//     console.log(result);
// });

Todo.findOneAndDelete('5bd0217863aafa2c04ed8532').then((doc) => {
    console.log(doc);
});