Docker uses a layered file system to store images. Each layer is built on top of the previous layer and contains only the differences from the previous layer. This approach allows for efficient use of storage space and faster image transfer between systems.

In a Dockerfile, you can define multiple stages, each of which can have a different base image. Each stage starts with a FROM command, which specifies the base image for that stage. Any subsequent RUN, COPY, or CMD commands apply to that stage and are saved as a new layer. Each stage is independent of the others and has its own set of layers.

The first FROM command in a Dockerfile specifies the base image for the first stage. Any subsequent RUN, COPY, or CMD commands in that stage are applied to that image and saved as a new layer. When a new FROM command is encountered, a new stage is started, and any subsequent RUN, COPY, or CMD commands are applied to that stage's image.

In each stage, you can only access the resources that were created in that stage or earlier stages. You cannot access resources from later stages or from previous layers in the same stage. For example, if you install a package in one stage, you cannot use that package in a later stage unless you install it again in that stage.

Here's an example Dockerfile to illustrate these concepts:

## First example

```bash
# Use the official Node.js 14 image as the base image for the first stage
FROM node:14

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to /app
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Use the official MongoDB 4.2 image as the base image for the second stage
FROM mongo:4.2 as mongo

# Set the working directory to /data/db
WORKDIR /data/db

# Copy the data directory from the host to /data/db in the container
COPY ./data /data/db

# Set the command to start MongoDB
CMD ["mongod"]

# Use Alpine Linux as the base image for the final stage
FROM alpine:latest

# Install necessary packages for the final stage
RUN apk add --no-cache nodejs

# Copy the Node.js application code to the final image
COPY --from=0 /app .

# Copy the MongoDB resources to the final image
COPY --from=mongo /data/db /data/db

# Expose port 3000
EXPOSE 3000

# Set the environment variable MONGO_URL to the URL of the MongoDB container
ENV MONGO_URL=mongodb://localhost:27017/mydb

# Start the Node.js application
CMD ["npm", "start"]
```

In this example, there are three stages:

The first stage uses the node:14 image as the base and installs Node.js dependencies.
The second stage uses the mongo:4.2 image as the base and copies data to the container.
The third stage uses the alpine:latest image as the base and installs Node.js and copies the code and resources from the previous stages.
Each stage is independent of the others and has its own set of layers. In the first stage, we use the official Node.js 14 image as the base image, set the working directory to /app, copy package.json and package-lock.json to /app, and install Node.js dependencies. In the second stage, we use the official MongoDB 4.2 image as the base image, set the working directory to /data/db, copy the data directory from the host to /data/db in the container, and set the command to start MongoDB.

In the third stage, we use Alpine Linux as the base image and install necessary packages for the final stage. We can't use the node:14 or mongo:4.2 images directly in the third stage because those stages have already been completed. Instead, we use the --from flag to copy resources from the previous stages.

To summarize, each stage in a Dockerfile is independent and has its own base image. Each stage starts with a FROM statement that specifies the base image for that stage. Each subsequent instruction in the Dockerfile adds a new layer to the image. The final image is a combination of all the layers from all the stages. You can use the COPY --from flag to copy resources from a previous stage into a later stage.

## Second example: 

```bash
FROM node:14

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to /app
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Use the official MongoDB 4.2 image as a base image
FROM mongo:4.2

# Set the working directory to /data/db
WORKDIR /data/db

# Copy the data directory from the host to /data/db in the container
COPY ./data /data/db

# Set the command to start MongoDB
CMD ["mongod"]

# Use the first base image (node:14) as the final base image
FROM node:14

# Set the working directory to /app
WORKDIR /app

# Copy the application code to /app
COPY . .

# Expose port 3000
EXPOSE 3000

# Set the environment variable MONGO_URL to the URL of the MongoDB container
ENV MONGO_URL=mongodb://localhost:27017/mydb

# Start the Node.js application
CMD ["npm", "start"]
```

1- FROM node:14: This sets the base image for the first stage as the official Node.js 14 image.

2- WORKDIR /app: This sets the working directory for the first stage as /app.

3- COPY package*.json ./: This copies the package.json and package-lock.json files to the /app directory in the container.

4- RUN npm install: This installs the Node.js dependencies in the container.

5- FROM mongo:4.2: This sets the base image for the second stage as the official MongoDB 4.2 image.

6- WORKDIR /data/db: This sets the working directory for the second stage as /data/db.

7- COPY ./data /data/db: This copies the data directory from the host to /data/db in the container.

8- CMD ["mongod"]: This sets the command to start MongoDB in the container.

9- FROM node:14: This sets the base image for the final stage as the official Node.js 14 image.

10 -WORKDIR /app: This sets the working directory for the final stage as /app.

11 -COPY . .: This copies the application code from the host to the /app directory in the container.

12- EXPOSE 3000: This exposes port 3000 to allow inbound traffic to the container.

13 -ENV MONGO_URL=mongodb://localhost:27017/mydb: This sets the environment variable MONGO_URL to the URL of the MongoDB container.

14 -CMD ["npm", "start"]: This starts the Node.js application in the container.

In this Dockerfile, we can see three stages:

The first stage installs the Node.js dependencies.

The second stage sets up the MongoDB container.

The third stage copies the application code to the container, sets the environment variable MONGO_URL, and starts the Node.js application.

Each stage is independent of the others and has its own set of layers. The first and third stages use the same base image (node:14), but the second stage uses a different base image (mongo:4.2).

We can't use the node:14 or mongo:4.2 images directly in the third stage because those stages have already been completed. Instead, we use the COPY --from flag to copy resources from the previous stages.

To summarize, each stage in a Dockerfile is independent and has its own base image. Each stage starts with a fresh layer stack, but we can use resources from previous stages using the COPY --from flag. We can't access commands or layers from previous stages directly, but we can copy resources from them.

