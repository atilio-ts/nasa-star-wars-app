# Nasa Starwars App Asignment

We ask that you create and deploy an application using one of the following api’s below.
With the returned data from the API, we ask that you creatively display the information using an
interactive three.js canvas. Users should be able to interact with the canvas in some way, for
instance, moving objects, filtering data, or anything else you can think of. You may use any
javascript framework you are comfortable with. It is preferred if you use typescript, but not
necessary. This should be a bit creative on your part. You decide what to do with the data you
get back from the API.

## Table of contents

#### [Project description](#description)

#### [Scripts](#scripts)

<a name="description"></a>

## Project description

### 1. API Integration:

The candidate must choose one of the following APIs for integration:

● NASA Free API: The candidate can choose any endpoint from NASA's API
available at [NASA Open APIs](https://api.nasa.gov/).

● Star Wars API: The candidate can choose any endpoint from the Star Wars API
available at [SWAPI](https://swapi.py4e.com/).

● The candidate should make API requests to retrieve information from the chosen
API.

### 2. Three.js Implementation:

● The candidate must use Three.js to create a 3D scene.

● - The scene should contain at least one interactive 3D object (e.g., a cube, sphere,
etc.).

● - The interactive object should respond to user interaction within the canvas, such as
clicking or hovering.

### 3. User Interaction:

● - User interaction should trigger a response within the scene. For example, clicking on
an object could change its color or trigger an animation.

### 4. Display of Information:

● The fetched data from the chosen API should be displayed within the Three.js scene in
some meaningful way. This could be through text rendering, object manipulation, or any
other creative method.

### 5. Code Quality:

● The code should be well-structured, readable, and follow best practices.

● Comments should be included where necessary to explain complex sections of code or
provide context.

### 6. Optional Enhancements:

● Candidates are encouraged to implement additional features or enhancements to
showcase their skills and creativity.

● Examples of enhancements could include adding animations, incorporating additional
API endpoints, unit testing, optimizing performance, or improving user experience.

<a name="scripts"></a>

## Scripts

### Prerequisites

Install NodeJs version 16.x or superior

### Frontend

    npm install
    
    npm run dev

### Backend

    npm install
    
    npm run build
    
    npm run start - make sure you've executed the build command before

    npm run buildStart
    

To test the endpoints you can use the swagger file found in: <http://localhost:3001/api-docs/public/> once the backend is up or with the Postman file NasaStarwars.postman_collection.json

