## Please use master branch only :) 
# WhoAmI API

This is a basic rest application that includes a **RESTful API** built with **ASP.NET Core 8** 
along with a **client-side React TypeScript** application which is for rebugging test, which is not related to API but a seperate client-side react project

## Folder Structure

- **WhoAmIAPI**: The folder containing the ASP.NET Core 8(or higher) API project.
- - **map-bookmarks-bugs-updated**: The folder containing React JS app with Redux  with api key for map

## Prerequisites

Before you begin, ensure that you have the following installed on your machine:

- **.NET SDK** (version 8 or higher) for running the backend API.
- **Node.js** (LTS version) and **npm** for running the client-side React app.
- VSCode or any similar IDE
- C# Dev kit (or OmniSharp )

## Navigate to the desired folder from Repo (WhoAmIAPI or map-bookmarks-bugs-updated)
### WhoAmIAPI
### 1. Install the Required .NET Packages

1. Check if dotnet is installed (same code for both Mac or Windows):
  dotnet --version

  Windows:
    winget install --id Microsoft.DotNet.SDK.8 -e --source winget
  
  Mac:
    brew install --cask dotnet-sdk



### 2. Run the API
  dotnet run

api is on port 5254
this is has a GET request only and error handling is minimum.
http://localhost:5254/PersonCreation?name={name}

Please replace name with a desired name
http://localhost:5254/PersonCreation?name=johnson

### map-bookmarks-bugs-updated
### 1. Install the Required client side Packages

1. Check if node is installed (same code for both Mac or Windows):
 node -v

  - install node using https://nodejs.org/en
    `install npm 
    install npm using
      npm install -g npm OR using following link
      https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
  

2. Install dependencies 
 `npm install`

 ** issues encountered.
 dependency conflict involving eslint@7.32.0 and eslint-plugin-flowtype@8.0.3, which needs eslint@^8.1.0
 ** solution: Quickest solution is ignoring strict peer dependency conflicts by npm `install --legacy-peer-deps`

3. Start the app
   `npm start`







  

