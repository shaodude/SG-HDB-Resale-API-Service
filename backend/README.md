# Backend

This project backend was created with [Java Springboot 17](https://spring.io/projects/spring-boot).


## Running the app

In the project directory, you can run:

```
mvn clean install   
```

Builds the project



```
./mvnw spring-boot:run
```

Runs the app in the development mode.\
Open [http://localhost:8080](http://localhost:8080) to view it in your browser.

SwaggerUI is bootstrapped with the backend application, you may interact and view the API endpoints after running the app. \
Open [http://localhost:8080/swagger-ui/index.html#/](http://localhost:8080/swagger-ui/index.html#/) to view it in your browser.

Database access is currently provided on a request basis, with credentials stored locally in an ENV file.