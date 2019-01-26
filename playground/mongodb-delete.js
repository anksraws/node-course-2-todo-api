const {MongoClient, ObjectID} = require('mongodb'); //same as above

var obj = new ObjectID();

console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser: true}, (err, client) => {

if(err) {

return console.log('unable to connect to mongodb');

}
db =client.db('TodoApp');
//db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result)=> {

//console.log(result);

//});
//db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) => {
   //console.log(result);
//});
db.collection('Todos').findOneAndDelete({completed:false}).then((result) =>{
	console.log(result);
});
console.log('connected to mongodb server');
});