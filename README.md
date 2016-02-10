# generator-wrap-bdd
generator to create base structure for end-user of wrap-bdd package

# Install instructions
1. Download and install nodejs
2. Run `npm install -g generator-wrap-bdd`
3. Create a local folder for storing the necessary cucumber-js artifacts `mkdir bdd`
4. `cd bdd`
5. `yo wrap-bdd`

# Collaborator instructions
If you like to introduce new test tool drivers for wrapping cucumber-js, please follow instructions in https://github.com/vsashidh/wrapping-bdd
  
# Test scripts
Still need to work on this.

# Running

1. There are three environment variables which is required for running namely 
    1. envName: `set envName=DEV` Currently supports all root XML node elements in the `Utilities/envs.xml` file
    2. testBrowser: `set testBrowser=chrome` Currently supports all browsers listed in your `<path-to-user-home>/.config/browser-launcher2/config.json`
    3. oletesttool: `set oletesttool=TestComplete` Currently supports TestComplete, TestExecute

2. Run `cucumber-js` from within the folder you had manually created using the install instructions.
