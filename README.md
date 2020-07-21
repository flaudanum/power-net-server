# PowerNet - API

PowerNet is an application for modeling electrical transmission networks and making power flow computations.

This application is a server providing a REST API for data storage and a computation service (_not developed yet_).

## Pre-requisites

This is a [Node.js](https://nodejs.org) application so you need it to be installed. Make sure the `bin/` folder of your install directory is appended to the environment variable `PATH`.

The source code is written with [TypeScript](https://www.typescriptlang.org/) so make sure to install it globally:

```sh
npm install -g typescript@latest
```

This application requires a local [MongoDB server](https://www.mongodb.com/). Once installed follow the appropriate [installation guide](https://docs.mongodb.com/manual/administration/install-community/) for your OS. This server should listen to the default port `27017` so the URI of the local _MongoDB server_ is:

```
mongodb://localhost:27017
```

## Installation

change to your local project directory and install dependencies with `npm`.

```sh
cd ./install-dir
npm install
```

Next compile the application with the TypeScript compiler:

```sh
tsc
```

Eventually start the server with `node`:

```sh
cd dist/
node app.js
```

Or with [pm2](https://pm2.keymetrics.io/):

```sh
pm2 start app.js --name power-net-server
```

## Running test

Unit testing was developed with [JEST](https://jestjs.io/). You can run the tests with either:

```sh
npm run test
```

or if you installed jest globally:

```sh
jest --coverage
```

## TODOs

- Complete unit test cover
- Add a collection with summaries of network models (thumbnails)
- Add validation of JSON schemas of request bodies
- Add endpoints for simulation
- Create power flow computation service supported by an external computation engine (e.g. Python package [PyPSA](https://github.com/PyPSA/PyPSA)) with a socket connection
- Add users and authentication w/ JWTs (bcrypt)
- Integrate Swagger JSON schema control and API documentation
- Webpack (Node.js + TypeScript config)
- API system testing with Postman
- System testing with MongoDB
- Containerization w/ Docker
  - w/ front app + NginX
  - DockerHub

## Dev tools

- VS Code
- Postman
- MongoDB Compass
- draw.io
