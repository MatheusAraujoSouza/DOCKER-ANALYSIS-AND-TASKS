




### Build image 

```bash
sudo docker build -t password-generator .
```

The -t flag in the docker build command is used to tag the resulting image with a given name and optional tag in the "name:tag" format. In the case of the command you provided, -t password-generator is used to tag the resulting image with the name "password-generator". This tag can later be used to reference the image in other Docker commands, such as docker run.

## To run this docker 
### run container 

```bash
sudo docker run password-generator 16 true
```
In the given command, 16 is the length of the password to be generated, and true is a boolean argument to specify whether to include special characters in the generated password or not.

