# Nasa Starwars App Asignment

## Table of contents

#### [Project description](#description)

#### [Scripts](#scripts)

#### [Developer Comments](#developerComments)

<a name="description"></a>

## Project description

### Front-end

Desarrolla

### Back-end

Desarrolla

<a name="scripts"></a>

## Scripts e instrucciones para correr el proyecto

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

<a name="developerComments"></a>

## Developer Comments

Dado que poseo mas experiencia como desarrollador backend para este proyecto, he intentado centrarme mas en este aspecto del proyecto.
Para empezar cree la base de datos para el proyecto, decidi usar SQLite ya qye no requiere instalacion o montar un servidor especifico; despues, cree los controladores y servicios para el proyecto y por ultimo los tests en jest, libreria que tuve que aprender a utilizar ya que es estoy mas acostumbrado a utilizar otras librerias como Mocha Chai Sinon y NYC. Luego continue testeando y corrigiendo bugs del backend hasta que quede satisfecho.

Para una muestra de como implementaria algunas de las mejoras mencionadas como seguridad o checkeo de coverage  de tests pueden dirigirse a este repositorio (<https://github.com/ajvg94/finance-tracker-app>).

En cuanto a mejoras para el backend existen muchas, desde agregar mas endpoints para tanto para las transacciones como para las cuentas (me limite a solo los endpoints solicitados por el ejercicio), asi como tambien seguridad mediante el uso de librerias como JWT, Bcrypt y Passport por ejemplo, la implementacion de cache con redis en caso de ser necesario. Tambien quiero mencionar que se podria implmentar un checkeo del coverage de los tests mediante librerias como NYC o alguna otra que sea compatible con Jest.

Para el front end cree los componentes necesarios para poder mandar los datos al backend y sus respectivos tests.
Como mencione anteriormente todavia me encuentro aprendiendo y mejorando con React por lo cual no implemente mas funcionalidades aparte de las basicas solicitadas y tampoco implemente las pruebas unitarias para los componentes.
Como mejoras a futuro se puede mejorar tanto el aspecto de los componentes asi como tambien crear nuevos componentes para agregar mas funcionalidades como el login, un dashboard, historial de transacciones, etc; asi como tambien agregar las respectivas pruebas unitarias.

Quedo atento a cualquier duda o sugerencia.

Muchas gracias.
