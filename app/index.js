var generators = require('yeoman-generator');
var chalk = require('chalk');

module.exports = generators.Base.extend({
	prompting: function () {
		var done = this.async();
		this.envTemplate = {};
		
		var prompts = [];
		this.log(chalk.white.bold('Let\'s populate your environment file: envs.xml'));
		
		prompts.push({
			type	: 'input',
			name	: 'devURL',
			message	: 'What is your development(DEV) instance URL?',
			default : 'devURL'
		});

		prompts.push({
			type	: 'input',
			name	: 'qaURL',
			message	: 'What is your quality(QA) instance URL?',
			default : 'qaURL'
		});

		prompts.push({
			type	: 'input',
			name	: 'stgURL',
			message	: 'What is your staging(STG) instance URL?',
			default : 'stgURL'
		});

		prompts.push({
			type	: 'input',
			name	: 'prodURL',
			message	: 'What is your production(PROD) instance URL?',
			default : 'prodURL'
		});

		prompts.push({
			type	: 'input',
			name	: 'localURL',
			message	: 'What is your local(LOCAL) instance URL?',
			default : 'localURL'
		});

		this.prompt(prompts, function (answers) {
			this.envTemplate = answers;
			done();
		}.bind(this));


	},
	writing: function () {
		this.fs.copy(this.templatePath('features/**'),this.destinationPath('features'));
		this.fs.copyTpl(this.templatePath('envs.ejs'),this.destinationPath('Utilities/envs.xml'),this.envTemplate);
	},
	install: function() {
		this.npmInstall(['wrap-bdd'],{'save': true})
	},
	end: function() {

	}
});