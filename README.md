# PowerNet - Server

This application is a service providing a REST API for modeling electrical transmission networks and making power flow computations.

## TODOs

- Add validation of JSON schemas of request bodies
- Increase unit test cover
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
