var parser = require('apis-parser');

module.exports = function(app,prefix){
	var car = require('car');

	app.get(prefix + '/is',function(req,res){
		parser(res)(function(cb){
			car.is(req.query.number, cb);
		});
	});
}