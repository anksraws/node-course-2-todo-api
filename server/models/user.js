var mongoose = require('mongoose');

var User =mongoose.model('USer', {
	email: {
		type: String,
		required:true,
		trim: true
	}
});

module.exports = {User};