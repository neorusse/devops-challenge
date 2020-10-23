# Convert PDF to WebForm

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

### Project Description

ParallelScore Convert PDF to WebForm Bounty Challenge.

App Url: [pdf2webform](<[https://#.com/](https://ps-react-appform.azurewebsites.net)>)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Table of Content

[Technology Used](#technology-used)<br/>
[Running the App Locally](#Running-the-App-Locally)<br/>
[Docker](#Docker)<br/>
[Production Deployment](#Production-Deployment)<br/>
[License](#license)<br/>
[Author](#author)

### Technology Used

React

Docker

Azure Container Registry (ACR)

Azure App Service - Web App for Containers

### Running the App Locally

In the project directory, you can run:

Run `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

Run `npm test`

Launches the test runner in the interactive watch mode.<br />

Run `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

### Docker

#### Building the Image

`docker build -t <container-registry-name>.azurecr.io/<image-name>:latest .`

#### List your Docker Image

Run `docker images`

#### Run App in Detached Mode

Run `docker run -d -p 80:8080 <container-registry-name>.azurecr.io/<image-name>`

#### To view App in Browser

Enter `localhost`

#### Login to your Azure Container Registry

Run `docker login <container-registry-name>.azurecr.io` and supply your username and password for authentication

#### Push Image to Docker Registry in Azure

Run `docker push <container-registry-name>.azurecr.io/<image-name>:latest`

### Production Deployment

Setup Web App for Containers Service and deploy the stored app image in ACR to it.

### License

[MIT](https://opensource.org/licenses/MIT)

### Author

[Russell Nyorere](https://neorusse.github.io/)
