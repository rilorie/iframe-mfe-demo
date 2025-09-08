This is a test repository that shows how to render a microfrontend (MFE) using iframes. 

You need to start both `hello-world-content` and `hello-world-root` in order to use this application: 

`cd hello-world-content`
`npm install`
`npm run start`

and 

`cd hello-world-root`
`npm install`
`npm run start`

Now, navigate back to the root of the project and start the server:

`cd ..`
`npm install`
`npm run start`

Now navigate to `localhost:3001`. You should see the application mounted in an iframe. 