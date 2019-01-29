var async = require('async');

var stack = [];

var functionOne = function(callback) {
	callback('ERROR', null);
}

var functionTwo = function(callback) {
	callback(null,'second function');
}

var functionThree = function(callback) {
	callback(null,'third function');
}

stack.push(functionOne);
stack.push(functionTwo);
stack.push(functionThree);

async.parallel(stack, function(err, result)
{
console.log(result);
});
