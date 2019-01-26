//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb'); //same as above

var obj = new ObjectID();

console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser: true}, (err, client) => {

if(err) {

return console.log('unable to connect to mongodb');

}
console.log('connected to mongodb server');
})
;
//let db = client.db('TodoApp');

/*db.collection('Todos').insertOne({
	text: 'something to do',
	completed: false

}, (err, result) => {
if(err) {
	return console.log('unable to insert todo');
}
console.log(JSON.stringify(result.ops, undefined , 2));
});*/

//db.close();
/*db.collection('Users'). insertOne({

name: "ankita",
age: 21,
address: "296/1 PRC Lines Meerut Cantt"

}, (err, result) =>{ 
	if(err) {
		return console.log('unable to insert User');
	}
	//console.log(JSON.stringify(result.ops, undefined, 2))
	console.log(result.ops[0]._id.getTimestamp());

});

});*/