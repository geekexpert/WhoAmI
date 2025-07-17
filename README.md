## Please use master branch only :) 
# WhoAmI API

This is a basic rest application that includes a **RESTful API** built with **ASP.NET Core 8** 
along with a **client-side React TypeScript** application which is for rebugging test, which is not related to API but a seperate client-side react project

## Folder Structure

- **WhoAmIAPI**: The folder containing the ASP.NET Core 8(or higher) API project.

## Prerequisites

Before you begin, ensure that you have the following installed on your machine:

- **.NET SDK** (version 8 or higher) for running the backend API.
- **Node.js** (LTS version) and **npm** for running the client-side React app.
- VSCode or any similar IDE
- C# Dev kit (or OmniSharp )

## Navigate to the folder from Repo

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





  

