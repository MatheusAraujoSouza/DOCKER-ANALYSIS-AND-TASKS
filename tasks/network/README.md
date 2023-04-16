# Node.js Microservices Example

This is a simple example of two Node.js microservices communicating with each other through a network using Docker and Axios.

## Prerequisites

- Docker
- Node.js

## Getting Started

1. Clone this repository
2. Open a terminal and navigate to the `app1` directory
3. Build the Docker image: `docker build -t app1 .`
4. Run the Docker container: `docker run -d --name app1 --network mynetwork -p 3000:3000 app1`
5. Open a new terminal and navigate to the `app2` directory
6. Build the Docker image: `docker build -t app2 .`
7. Run the Docker container: `docker run -d --name app2 --network mynetwork -p 4000:4000 app2`
8. Open a web browser and go to `http://localhost:4000`

## What's happening?

- `app1` is a simple Node.js server that listens on port 3000 and responds with a message
- `app2` is a simple Node.js server that listens on port 4000 and makes a request to `app1` using Axios
- When `app2` receives a request on port 4000, it makes a GET request to `http://app1:3000` using Axios
- `app1` receives the GET request and responds with a message
- `app2` receives the response from `app1` and sends it back to the web browser

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt) file for details.