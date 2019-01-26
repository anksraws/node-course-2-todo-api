const {MongoClient, ObjectID} = require('mongodb'); //same as above

var obj = new ObjectID();

console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser: true}, (err, client) => {

if(err) {

return console.log('unable to connect to mongodb');

}
let db = client.db('TodoApp');
db.collection('Todos').find().toArray().then((docs)=> {
console.log('TodoApp');
console.log(JSON.stringify(docs, undefined, 2));
}, (err)=>{
console.log('unable to fetch ', err);
} );
console.log('connected to mongodb server');
});