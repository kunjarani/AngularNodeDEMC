# AngularJSNodeDEMC
AngularJS with nodeJS and MongoDB

# AngularNodeDEMC
AngularJS with nodeJS and MongoDB to multiply inputs

Installation of AngularNodeDEMC

# Nodejs Installation

1. Open the official page for Node.js downloads ( https://nodejs.org/en/download/ ) and download           Node.js for Windows by clicking the "Windows Installer" option
2. Run the downloaded Node.js .msi Installer - including accepting the license, selecting the              destination, and authenticating for the install.
3. This requires Administrator privileges, and you may need to authenticate

4. Check the version by running " node -v " (without Quotes),

5. The current version which AngularNodeDEMC is using node : v10.16.0



# Setup

1. create a folder " AngularNodeDEMC ".
2. Move into the folder " cd AngularNodeDEMC "

3. Run the below command to clone the repsitory:

     git clone https://github.com/kunjarani/AngularNodeDEMC.git

4. Run " npm install " in folder AngularNodeDEMC/
5. This is get the node modules and dependencies.
6. NodeJS dependency: express , ejs ,body-parser,mongoose 
7. Run " ls " . You should see " node_modules "  folder .
8. After node_modules are created in folder " AngularNodeDEMC/ ", move to " public " folder.
9. Run " cd public " .
10. Run " npm install " . path : " AngularNodeDEMC/public "
11. This is get the node modules and dependencies for angularjs.
12. AngularJs dependency : angular , angular-mocks , karma karma-chrome-launcher karma-jasmine ,            karma-cli

MongoDB dependency:

1. The current application AngularNodeDEMC is using MongoDB database and running the data base in          localhost.Please make sure you have mongo db setup.
2. Run mongodb using " mongod " to start mongodb server.

3. As it is in local host please create a db by running the following commands.

   " mongo " (to start the workbench).

   " use angularJsNodeDEMC " (data angularJsNodeDEMC is created).


# Run and Launch the application

Run " node app.js " from path " /AngularNodeDEMC ". Navigate to http://localhost:3000/app/index.html. 


# Running the test cases

Run " karma start karma.conf.js "  from path " /AngularNodeDEMC/public " to execute the unit tests via Karma.






