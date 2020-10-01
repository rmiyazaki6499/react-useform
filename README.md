![React Banner](https://user-images.githubusercontent.com/41876764/94856480-e7b8b200-03e4-11eb-949d-c3a447b43df2.jpeg)

# React useForm

This is a practice repo for using custom hooks for forms in React.

## Table of Contents

- [Setting up the project with Docker](#setting-up-the-django-app-project-with-docker)
  - [Install Docker](#install-docker)
  - [Build and Run the Container](#build-and-run-the-container)
  - [Cleaning up the Container and Image](#cleaning-up-the-container-and-image)
- [Authors](#authors)

## Setting up the project with Docker

For those that are not interested in setting up the project manually or would simply not have to worry about downloading python and its dependencies, I have created a Dockerfile and docker-compose.yml file to help create a container with everything you would need to run the project.

### Install Docker

To make this as easy as possible, we will be using *Docker Compose* to creat our container.

- If you do not have Docker yet, start by downloading it if you are on a Mac or Windows:
https://www.docker.com/products/docker-desktop

- Or if you are on a Linux Distribution follow the directions here:
https://docs.docker.com/compose/install/

- To confirm you have Docker Compose, open up your terminal and run the command below:

```
$ docker-compose --version
docker-compose version 1.26.2, build eefe0d31
```

### Build and Run the Container

- Clone the repo to your local machine:

```
$ git clone https://github.com/rmiyazaki6499/react-useform.git
```

- Go into the project directory to build and run the container with:

```
$ cd react-useform/
$ docker-compose up --build
```

Navigate to http://localhost:3000 to view the site on the local server.
It should look something like this:

![React Form](https://user-images.githubusercontent.com/41876764/94860950-9d86ff00-03eb-11eb-9c47-63c0208ec778.png)

### Cleaning up the Container and Image

To stop the container from running, use `<Ctrl-C>` twice.
To close down the container use the command:

```
$ docker-compose down
```
Then to clean up the container and image which we are no longer using use the command:

```
$ docker system prune -fa
```

Confirm that the container and image is no longer there with:

```
$ docker system df -v
```

## Inspiration

[Form Validation Using Custom React Hooks](https://upmostly.com/tutorials/form-validation-using-custom-react-hooks)


## Author

Created by:

- [Ryuichi Miyazaki](https://github.com/rmiyazaki6499)
