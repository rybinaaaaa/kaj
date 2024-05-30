#FROM jelastic/maven:3.9.5-openjdk-21 AS build
#COPY . /app
#WORKDIR /app
#RUN mvn clean package -Dmaven.test.skip=true

FROM openjdk:23-ea-jdk-oracle

ADD target/Application-0.0.1-SNAPSHOT.jar app.jar

ENTRYPOINT ["java", "-jar", "app.jar"]