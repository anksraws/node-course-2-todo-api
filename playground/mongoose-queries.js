const {ObjectID} =require('mongodb');


const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

/*var id ="6c4d5d3beebeb35d4cb30b54";

if(!ObjectID.isValid(id)){
	console.log('ID NOT VALID');
}

Todo.find({
	_id: id
}).then((todos) => {
	console.log("todos", todos);
});

Todo.findOne({
	_id: id
}).then((todo) => {
	console.log("todo", todo);
});

Todo.findById(id).then((todo) => {
	if(!todo){
		return consle.log('id nt found');
	}
	console.log("todo by id ", todo);
}).catch((e) => console.log(e));
*/

User.findById('5c4c85174e41f15ac5cf0b56').then((user) => {
	if(!user)
	{
		return console.log('unable to find user');
	}
	console.log(JSON.stringify(user, undefined, 2)); 
},(e) => {
	consle.log(e);

});