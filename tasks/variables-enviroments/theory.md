 # Environment Variables
 
 You can define the environment variables in your docker-compose file using the environment key, like this:

 ```yaml
 version: '3'
services:
  app:
    image: myapp:latest
    environment:
      APP_MODE: ${APP_MODE}
      APP_EXPRESS_PORT: ${APP_EXPRESS_PORT}
      APP_PUBSUB_SUBSCRIPTION_NAME: ${APP_PUBSUB_SUBSCRIPTION_NAME}
 ```

Then you can create a JSON file with the variable values and use a script to replace the placeholders with the actual values before starting the container. You can keep the original JSON file with the placeholders as a template for future use.

And you can also keep the custom values in your custom-values.yaml file, so you have a central place to manage all your variable values.

Here's an example of how your custom-values.yaml file could look like:



 ```yaml
env:
  APP_MODE: #{APP_MODE}#
  APP_EXPRESS_PORT: #{APP_EXPRESS_PORT}#
  APP_PUBSUB_SUBSCRIPTION_NAME: #{APP_PUBSUB_SUBSCRIPTION_NAME}#
 ```

And here's an example of a script that replaces the placeholders in the JSON file with the actual values:


 
 ```yaml
#!/bin/bash

# Load the custom values
source custom-values.yaml

# Replace the placeholders with the actual values
envsubst < config-template.json > config.json

# Start the container with the modified JSON file
docker-compose up -d
 ```
The envsubst command is used to substitute environment variables in a file with their corresponding values. In this specific command, it takes a configuration file config-template.json as input, and generates a new configuration file config.json as output, with environment variables substituted with their values.

For example, if config-template.json contains the following line:

  
 ```yaml
"api_key": "${API_KEY}"

 ```
And if the environment variable API_KEY has the value my-api-key, then running the command envsubst < config-template.json > config.json will generate a new file config.json with the line:

  
 ```yaml
"api_key": "my-api-key"
 ```

 This can be useful when you want to generate configuration files dynamically, based on the environment where the application is running. The envsubst command is typically used in conjunction with Docker or other containerization tools, to generate configuration files during the container initialization process.