

## Order pizza app 
This project is about practising Jest / Enzyme testing with React. 
I've also made a nodeJS Express testing examples with Jest.


## Features
 - Login (check the last orders , change password) // not implemented
 - Register // not implemented
 - Order without registration // not implemented
 - See all of the selected pizzas in the basket


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the Front-end  app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


To run the back-end server navigate to  /server folder.  You need to install the deppendencies:
 `npm install`   


After that just start the server:
 `node server` 


### `npm test`

This command will run all Front-end tests. 

Jest is giving you the ability to write following type of tests: 

 - Snapshoot testing  (creates snapshoot file and compare it )
 - DOM Testing ( we need to use Enzyme )

You will be also able to create own transformers. 


Jest can be used for Express / nodeJs Apps for testing. 
To run the routes  tests, the server should be started and the folloing command should be executed: 
 `npx jest server.test` 


### `npm run build`

Builds the app for production to the `build` folder.

If you want to serve the production bundle from the server you need to make a static serving on the server and to navigate the root `/` path to `/index.html` file located in the build folder;