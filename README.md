# QE-Mature

This is a simple tool to understand your teams maturity with in Quality Engineering practices.

## Design

In order to best understand how to host this application, we need to have a basic diagram of the application involved.

Users can then select to host this in their own cloud or locally.

The below is an example of the applications that might be needed base on the ideation and R&D Phase.

**Hazura**

Postgress DB
GraphQL layer

**Single Page front ends**

React or Pug for registration
React or Pug for assemsmet
React or Pug for Graphs (might be post MVP)

refer to the [design document](DESIGN.md)

## Pre requisites

- Node (15.x)
- Docker (Latest)

## Start


Install dependecies and build the applications using the commands below

```bash
npm install
npx nx build mature-api
```

Start application with the below command and ensure you pass the PORT you want to use

```bash
PORT=3001 npm run start:api
```



