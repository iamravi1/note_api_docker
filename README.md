# Notes API 
This is a simple backend API built using Node.js for performing CRUD  operations on notes and containerised the application using docker.

## Prerequisites
- Git & Docker install on your machine.

## API endpoints

- `GET /notes/`: Get all notes.
- `POST /notes/create/`: Create a note.
- `GET /notes/:id/`: Get a specific note.
- `PUT /notes/:id`: Update a specific note.
- `DELETE /notes/:id`: Delete a specific note.

**Postman collection link: 🔗 [click-here](https://www.postman.com/ravi-s-kl/workspace/notes-api/request/20367997-b1c5d899-7e73-4a2a-8514-aae215a6f813)**

## Docker Containers
This application is containerized using Docker and is composed of two containers:

- `notes-app`: This container runs the Node.js server and serves the API.
- `mongodb`: This container runs a MongoDB database instance.

## Getting Started
1. Clone the repository and navigate to the project directory.

```
git clone https://github.com/iamravi1/notes_api_docker.git
cd notes-api-docker
```

2. Run the application in Docker.
```
docker-compose -f docker-compose.yml up
```

The API will be available at http://localhost:3000.

## Explanation:
Docker Compose is a useful tool for defining and running multi-container Docker applications. With Docker Compose, you can define the services, networks, and volumes required by your application in a single YAML file. This makes it easy to start up your entire application stack with just one command.

Using Docker Compose simplifies the process of deploying a complex application. You can define multiple containers and the relationships between them in a single file. This helps manage dependencies between containers, making it easy to start, stop, and scale your application as needed.

To build our notes app, we will use a Dockerfile. This file contains instructions on how to build a Docker image, which can then be used to create a container for our notes app.

With the docker-compose.yml file, we can build the notes-api image and pull the mongo image from Docker Hub. The mongo container will bind to port 27017, while the notes-api container will bind to port 3000.

Overall, Docker Compose and the Dockerfile are powerful tools that simplify the deployment process for complex applications. They allow developers to easily manage multiple containers and dependencies, making it easy to scale applications as needed.
