# generator-wrap-bdd
generator to create base structure for end-user of wrap-bdd package. 

wrap-bdd allows for natural language testing using the cucumber-js BDD framework.

# Install instructions
1. Download and install nodejs
2. Run :  `npm install -g yo generator-wrap-bdd cucumber`
3. Create a local folder for storing the necessary cucumber-js artifacts :  `mkdir bdd`
4. `cd bdd`
5. `yo wrap-bdd`

# Collaborator instructions
If you like to introduce new test tool drivers for wrapping cucumber-js, please follow instructions in https://github.com/vsashidh/wrapping-bdd
  
# Test scripts
Still need to work on this.

# Running

1. There are three environment variables which is required for running namely 
    1. envName: `set envName=DEV` Currently supports all root XML node elements in the `Utilities/envs.xml` file

    2. testBrowser (OPTIONAL if you prefer to launch browser from within the test script): `set testBrowser=chrome` Currently supports all browsers listed in your `<path-to-user-home>/.config/browser-launcher2/config.json`

    3. oletesttool: `set oletesttool=TestComplete` Currently supports TestComplete, TestExecute

2. Run `cucumber-js` from within the folder you had manually created using the install instructions.

![Alt text](/../screenshots/screenshots/run_results.JPG?raw=true "Example run")

# Writing features and step files

This tool will create the necessary folder hierarchy to support the development of behavior driven tests. I will defer you to review documentation pertaining to writing a feature file and step file to https://github.com/cucumber/cucumber-js. 

A noteworthy point is the ability of cucumber-js to provide you a stub step file once you have created your feature file:
![Alt text](/../screenshots/screenshots/stub_step_definition.JPG?raw=true)
which you wrap within:
<pre><code>
    module.exports = function () {
    
    };
</code></pre>
Once you have the feature and step file created, to initiate the interaction with the test tool, you would use the following call within the step function:
<pre><code>
    this.call(string_full_path_to_project_suite,
      string_project_name,
      string_full_name,
      callback);
</code></pre>
where the first three parameters would be string objects and the last a callback function provided by cucumber-js step function. The callback function is how the current operation being performed will be blocked until the test tool completes processing and returns result.
