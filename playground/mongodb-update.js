const {MongoClient, ObjectID} = require('mongodb'); //same as above

MongoClient.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser: true}, (err, client) => {

if(err) {

return console.log('unable to connect to mongodb');

}
db =client.db('TodoApp');
/*var myquery = { _id: new ObjectID('5c4bcdd2d7b30444bf19ae8d') };
  var newvalues = {completed: true };
  db.collection("Todos).updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
  });*/

db.collection('Todos').findOneAndUpdate({
	_id: new ObjectID('5c4bcdd2d7b30444bf19ae8d')
}, {
	$set: {
		completed: true
	}
} , {
	returnOriginal: false
}).then((result) => {
	console.log(result);
});
});
