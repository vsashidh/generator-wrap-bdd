var AfterHooks = function () {
	this.After(function (scenario) {

		// after scenario tasks goes here:
		debugger
		this.testDriver.close(this.browser);

		//garbage collecting
		this.browser = null;
		this.testDriver = null; //making testDriver object unreachable for garbage collection.

	});
};

module.exports = AfterHooks;