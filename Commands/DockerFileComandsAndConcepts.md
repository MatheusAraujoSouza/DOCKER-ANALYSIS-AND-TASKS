ENV: This command sets environment variables that can be used in subsequent commands in the Dockerfile. Here's an example:

```bash
Copy code
ENV APP_HOME=/myapp
WORKDIR $APP_HOME
```
This sets the APP_HOME environment variable to /myapp and then changes the working directory to /myapp.

ARG: This command defines arguments that can be passed to the Dockerfile when it's built. These arguments can be used in the Dockerfile, but they're not available in the image that's created from the Dockerfile. Here's an example:

```bash
Copy code
ARG VERSION=latest
FROM nginx:$VERSION
```
This defines an VERSION argument with a default value of latest, and then uses that argument in the FROM command to specify the version of the nginx image to use.

VOLUME: This command creates a mount point for a volume to be used by the container. Here's an example:

```bash
Copy code
VOLUME /myvol
```
This creates a mount point at /myvol that can be used to mount a volume when the container is run.

USER: This command sets the user that the subsequent commands in the Dockerfile will be run as. Here's an example:

```arduino
Copy code
USER myuser
WORKDIR /home/myuser

```
This sets the user to myuser and changes the working directory to /home/myuser.

LABEL: This command adds metadata to the image that's created from the Dockerfile. Here's an example:

```css
Copy code
LABEL maintainer="myname@example.com"
```
This adds a label to the image with the maintainer key set to myname@example.com.

EXPOSE: This command documents the ports that the container listens on. Here's an example:

```
Copy code
EXPOSE 80 443
This documents that the container listens on ports 80 and 443.
```

CMD: This command specifies the default command that's run when the container is started. Here's an example:

```css
Copy code
CMD ["python", "app.py"]

```
This specifies that the default command is to run the app.py Python script.

ENTRYPOINT: This command specifies the executable that's run when the container is started. Here's an example:

```css
Copy code
ENTRYPOINT ["python", "app.py"]

```
This specifies that the python executable is run with the app.py script as its argument.