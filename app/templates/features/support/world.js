var driver = require('wrap-bdd');

function World() {

	this.testDriver = new driver();

	this.browser = null;

	this.call = function(projectsuite, project, fullfuncname, cb){
		var result;
		var	argsObj = {
				projectSuite : projectsuite,
				project : project,
				fullmethodname : fullfuncname,
		};

		this.testDriver.call(argsObj, function(value){
			if (value)
				cb();
			else
				cb(new Error("Something went wrong!"));
		});
	};

}

module.exports = function() {
	this.World = World;
};