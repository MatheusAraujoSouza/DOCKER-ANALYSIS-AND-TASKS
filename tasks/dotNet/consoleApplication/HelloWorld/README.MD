# RUNNING THE APPLICATION

In application root terminal  
 ```bash
 docker build --pull --rm -f "tasks\dotNet\consoleApplication\HelloWorld\dockerfile" -t dockeranalysisandtasks:latest "tasks\dotNet\consoleApplication\HelloWorld" 
 ```
after:
```bash
 docker run --rm -d  dockeranalysisandtasks:latest
```
