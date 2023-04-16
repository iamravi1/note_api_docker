# Notes App API
This is a REST API for a basic notes app that allows users to create, edit, delete, and fetch notes. The API is built using Node.js and the Express.js web framework. The notes are stored in a MongoDB database.

## Requirements
- Node.js
- npm
- Express.js
- mongoose
## Installation
### Clone the repository:
```
git clone https://github.com/iamravi1/notes_api_docker.git
```
### Install the dependencies:
```
cd notes-app-api
npm install
```
### Set the following environment variables:
MONGODB_URI: the URI for your MongoDB database
PORT: the port that the server will listen on (default is 3000)
Start the server:
```
npm start
```
### Usage
The following endpoints are available:

- `GET api/notes`: fetch all notes
- `GET api/notes/:id`: fetch a specific note by ID
- `POST api/notes/create`: create a new note
- `PUT api/notes/:id`: update an existing note by ID
- `DELETE api/notes/:id`: delete a note by ID

**Postman collection link: 🔗 [click-here](https://www.postman.com/ravi-s-kl/workspace/notes-api/request/20367997-b1c5d899-7e73-4a2a-8514-aae215a6f813)**

The request and response formats for each endpoint are as follows:

GET api/notes

Response
json
```
[
  {
    "title": "Note 1",
    "content": "This is the content of Note 1."
  },
  {
    "title": "Note 2",
    "content": "This is the content of Note 2."
  }
]
```
GET api/notes/:id

Response
json
```
{

  "title": "Note 1",
  "content": "This is the content of Note 1."
}
```
POST api/notes

```
{
  "title": "Note 3",
  "content": "This is the content of Note 3."
}
```
Response
json
```
{

  "title": "Note 3",
  "content": "This is the content of Note 3."
}
```
PUT /notes/:id
```
{
  "title": "Updated Note",
  "content": "This is the updated content of Note 1."
}
```
Response
json
```
{

  "title": "Updated Note",
  "content": "This is the updated content of Note 1."
}
```
DELETE /notes/:id

```
Note deleted
```

## Docker
To build and run the Docker container for this API:

### Repository in Docker Hub

https://hub.docker.com/repository/docker/iamravi1/notes-app-api/general

### Docker Hub link to pull the image

https://hub.docker.com/repository/docker/iamravi1/notes-app-api/tags?page=1&ordering=last_updated

### Command to pull the docker image

```
docker pull iamravi1/notes-app-api:1.0
```

### Build the Docker image:
```
docker build -t notes-app-api .
```
### Start the Docker container:
```
docker run -p 3000:3000 notes-app-api
```
The API will be available at http://localhost:3000.

### Explanation:
Docker Compose is a useful tool for defining and running multi-container Docker applications. With Docker Compose, you can define the services, networks, and volumes required by your application in a single YAML file. This makes it easy to start up your entire application stack with just one command.

Using Docker Compose simplifies the process of deploying a complex application. You can define multiple containers and the relationships between them in a single file. This helps manage dependencies between containers, making it easy to start, stop, and scale your application as needed.

To build our notes app, we will use a Dockerfile. This file contains instructions on how to build a Docker image, which can then be used to create a container for our notes app.

With the docker-compose.yml file, we can build the notes-api image and pull the mongo image from Docker Hub. The mongo container will bind to port 27017, while the notes-api container will bind to port 3000.

Overall, Docker Compose and the Dockerfile are powerful tools that simplify the deployment process for complex applications. They allow developers to easily manage multiple containers and dependencies, making it easy to scale applications as needed.
