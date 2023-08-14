# Node Chat
## Description
This is a demo app which provides a simple chat server in node, and a client in React.

## Local Development
To run the server locally, simply run `npm start` from the `server` directory. The app will start using `nodemon`.

To run the client, run `npm start` from the `client` directory to start `webpack-dev-server`. Webpack will proxy requests to the server if it is running (recommended).

## Testing
The `client` and `server` directories each have their own set of tests. To run either, simply run
```
npm test
```

You can also see the latest build of this app running live at https://jfraser-node-app-2f32a5ad923d.herokuapp.com/
