# React, Typescript and Express starter pack

This is a starter pack for an React app written with typescript and an express server. I have used webpack to compile the front end and typescript to compile the backend. Note that it does not use webpack-dev-server.

## to start the project

- clone the repo
- cd into client
- npm i
- npm run build:front (or build:front:watch to watch for changes)
- cd ..
- cd into server
- npm i
- npm run build:back (or build:back:watch to watch for changes)
- npm start
- go to localhost:3000 and you will see your react component (do not go to https://localhost:3000, as it wont work)

## Client folder

in the root of the client folder there is:

index.html
public folder
package.json
tsconfig.json
webpack.config.js
dist folder (created automatically by webpack)
node_modules folder (created automatically from installing node modules)

## Server folder

app.ts
index.ts
package.json
tsconfig.json
dist folder (created automatically by typescript)
node_modules folder (created automatically from installing node modules)

## How it works

### building the front end:

running npm run build:front:watch runs the command "webpack --config webpack.config.js --watch". This says to run webpack and directs it to the webpack config file, (and tells it to watch for changes).

Inside the webpack config file we have given it the path to the entry file and the output destination. In our case the entry file is index.tsx inside the public folder because this is the file that all other js files will be pulled into. (we do not start with the html file as the entry point because html does not need to be compiled).
We tell it that the output should be placed at path '/dist/public' and be called 'index.bundle.js'.

we give it rules to follow telling it to load ts and tsx files using 'awesome-typescript-loader' and to ignore any files that have 'node_modules' in their file path (we want to ignore node modules because they dont need to be compiled for the browser and it would be an expensive operation to try to compile all node modules we have).
note that the reason we need a tsconfig file in the front end (even though we arent compiling with typescript) is because webpack uses it to ensure it is compiling it appropriately. webpack uses awesome-typescript-loader to load the typescript, and awesome typescript looks for the tsconfig file to see our individual preferences.

we tell it to use the HTMLWebpackPlugin because we need to create a html file in the dist folder that will mirror the html file we have in the client folder. When using this plugin webpack creates an html file in the dist folder with the script tag telling it to load the javascript file that webpack has compiled for us.

### building the back end:

running npm run build: back:watch runs the command "tsc -p tsconfig.json --watch", this says to run the typescript compiler and tells it where to look for the typescript config (and tells it to watch for changes).

The tsconfig file knows to look for any ts file (?), and we tell it where to put the output by giving a path to "ourDir". Again we tell it to ignore node modules.

### starting the app

running npm start runs the command 'node dist/index.js', i.e. the file that starts the server after it has been compiled to javascript. in this file we are listening to our port. Then when we go to that port (in our case localhost:3000), our server hears that someone is there and requests our html file from our express server. This request is picked up in our app.js file where we have stated that anyone at endpoint '/' should be given the html file (after webpack has compiled it, i.e. it has the script tag in it to the index.bundle.js). When the browser recieves the html file it will then see the script tag and come back asking for that file. this request is picked up by our middle ware that says any requests for static files should be responded to by the relevant file in the public folder.

### questions:

- why do we need a typescript config on front end
  because webpack uses awesome typescript loader which looks to the tsconfig for info on what rules to follow
- why do we need webpack on front end and not on backend
  because the front end needs to be compiled to javascript so that it can communicate with the browser but the backend doesnt need that. however we still need to compile the backend because...
- what is everything doing in the tsconfig on backend , does it just convert all typescript files?
- why do we need to compile the back end?
- why do we not want to compile node modules... surely we need to to be able to use that code?
- how does express know which files to serve within the public folder?
- how does express know you are asking for a static file (what is a static file?)
- how much of this code could we get rid of and have it still working?
- is this an efficient way to run an app? would it be better to use webpack dev server?
- in webpack config file what does resolve do and what does mode do
- what does awesome typscript loader do?
- why does it not work at https://localhost:3000
  because the s requires it is certified
