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
git clone https://github.com/your-username/notes-app-api.git
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

- GET /notes: fetch all notes
- GET /notes/:id: fetch a specific note by ID
- POST /notes: create a new note
- PUT /notes/:id: update an existing note by ID
- DELETE /notes/:id: delete a note by ID
The request and response formats for each endpoint are as follows:

GET /notes
Request
None

Response
json
```
[
  {

    "title": "Note 1",
    "content": "This is the content of Note 1."
  },
  {
    "id": "2",
    "title": "Note 2",
    "content": "This is the content of Note 2."
  }
]
```
GET /notes/:id
Request
None

Response
json
```
{

  "title": "Note 1",
  "content": "This is the content of Note 1."
}
```
POST /notes
Request
json
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
Request
json
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
Request
None

Response
None

## Docker
To build and run the Docker container for this API:

### Build the Docker image:
```
docker build -t notes-app-api .
```
### Start the Docker container:
```
docker run -p 3000:3000 notes-app-api
```
The API will be available at http://localhost:3000.

### License
This project is licensed under the MIT License.
# note_api_docker
