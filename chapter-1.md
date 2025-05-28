## 1. JavaScript & Node.js Core Concepts

Questions:

### 1 : What is Node.js? How is it different from traditional server-side technologies?

- Nodejs is javascript run time environment that runs on the outside of the browser, it uses v8 engine
  to execute the javascript code on the server side, Nodejs uses non-blocking, event-driven, input/output model, which allows it to handle multiple task at the same time without blocking the request, it makes fast and efficient for real time application.

<hr>

### 2: Explain the Event Loop in Node.js.

- The event loop in nodejs, it handle the multiple tasks at the same time without blocking request, it works by offloading long tasks, like reading the files or API calls to the background, when those task are done, the event loop runs their callback.

<hr>

### 3: What are global objects in Node.js?

- Global objects in nodejs are built in object, that we can use without importing them, they are by default, some global object is **dirname, **filename, setTimeout(), process, where \_\_dirname provide current folder path, setTimeount() runs the funciton after some time, and process object provides the information about the running program.

<hr>

### 4: What is require() and how is it different from import?

- in nodejs require() is function which is commonjs module system, it loads the files or packages at runtime, where import is newer version and it is a part of ES6 module system. The main difference is require() is older version and work with all versions of nodejs by default, and import is newer which need a small setup in package.json file "type" : "module" this is ES6 module system

<hr>

### 5: How does Node.js handle asynchronous operations?

- For handling asynchrounous operation, nodejs uses non-blocking system, when perform a task like reading files, or calling apis, it does not wait, it send the task to the background, and node also doing other task, so node js uses callbacks, promises, and async/ await to get the result, when the task is finished.

<hr>

## Concepts to Cover:

### Node.js single-threaded, non-blocking architecture

- Nodejs is single threaded, node uses non-blocking system, this means it runs all javascript code in single thread, but nodejs can handle multiple tasks at the same time by offloading slow operation like reading file, api calls to the background, when the background task are done, nodejs get the result by using non blocking system is, callbacks, promises, async/ await , that help node to handle mulple task in the background at the same time.

<hr>

### Asynchronous programming (callbacks, promises, async/await)

- asynchronous programming in nodejs it means handle code without waiting for a long task to finish, instead of blocking program. nodejs uses different way to handle result like callbacks, promises, async/await

> > callback : a callback is function that passed into another function, which runs after the task is finish.

> > promises : a promises represent the value that will be available in the future either success(resolve) or failure(reject), it handle by keyword like .then() for resolve and .catch() for reject.

> > async / await : its a modern way to handle asynchronous code. it mark a function as async, and use await to pause the execution until the promise is resolve

<hr>

### Event loop phases

- In nodejs event loop run in different phases, each phases handle a specific type of task, like timer, i/o callbacks. it keep going in loops to check wihtout blocking the main thread /
- so loop run in background and check the without blocking main thread

<hr>

### Global objects like **dirname, **filename, process, Buffer

- nodejs have built in object, that we can use anywhere in the code file without importing it, there are some global object is **dirname, **filename, process, buffer

- \_\_dirname : it provide the full path of the current folder name
- \_\_filename : it also provide the path current folder with filename
- process : it provide the information about the current running node program
  -buffer : it handle the binary data like reading file, images, stream, directly in memory.

  ### Write a setTimeout function and explain where it goes in the event loop. Identify if a code block is synchronous or asynchronous.

> nodejs archetecture : when client makes a request to nodejs server, and then request goes in event-queqe which is a fifo principle, like fist in fisrt out, and then event loop check the what type of operation in the event queue if there is non blocking operation(asynchoronous) it directly process and sent to the client, theres no need treads to process, if there is a blocking operation(synchrounous) so event loop sent to the tread pool and then if there is free thread so it will process the request and sent to the client if no free thread so it will wait until the treads free.

> in nodejs have 4 tread/worker by default

> console.log("first log"); //this is synchronous operation

> setTimeout(() => { // this is asynchronous opeation
> console.log("second log");
> }, 2000);

> console.log("third log"); //this is synchronous operation

> Explaination: settimeout() is asynchronous function, it sends the callback to the timer phases.
> of the event loop.

> identify synchronous and asynchronous code

- synchronous code runs line by line and wait for each step to finish

  > console.log("first log"); // step 1 read log
  > let sume = 2 + 5; // step 2 calculate
  > console.log(sume); // step 3 answere

- Asynchronous code : this is asynchronous code because it sends the task to the background and countinue running other code
- > setTimeout(() => {
  > console.log("second callback log");
  > }, 2000);

<!-- -===================================================================================================== -->

# 2. Modules & Package Management

### 1 : Difference between CommonJS and ESModules?

- CommonJS uses require() funtion and is used in Nodejs and load the modules one by one (sychronously).
- ESmodules uses (import/export) module, it is modern way to handle module asynchronously for better performance

### 2 : Why and when to use npx over npm?

- npm : is used to install nodejs package permanetly in project.
- npx : is used to run nodejs package without installing globaly. when to use : when we want to run packages only one time

### Explain the structure and role of package.json.

- package.json it is a configuration file used in Nodejs project to manage the depedencies, scripts , metadata.

- package.json file structure is
- > name : project name
- > version: version of the project
- > description : brief summery of the project
- > main : it is entry point (which define the main server file)
- > script : it is used for commands automation
- > dependencies : when require package for production
- > devDependencies : when require package for development
- > keyword : it helps for searchablity
- > author : author of the project
- > liecence : define project rights

### What’s the difference between dependencies and devDependencies?

- dependencies : it is required the packages for application to run in the production
- devDependencies : it is required the packages for only during the development. and it not required when the app deployed.

# Concepts to Cover:

### module system and compatibility

- In nodeJS moudule system it allows to split code in reusable file. so we can uses anywhere in the code file, there are two type of module system.

- > CommonJS is the older version and by default in nodejs. it compatible with the nodejs only, so it uses the require () function to import and module.exports to export.

- > ESModule it he newer version and it compatible with both side frontend and backend it support modern browser also to work properly.

### Tools like npm, yarn, npx

- npm : stands for Node Package Manager, it is intall and manage the dependencies or libraries in the project using command like npm install.

- yarn : it is alternative of npm. it also manage the dependencies, but with improvement speed, security, and caching, and its consistency across machines using the lock file.

- npx : it also a tool thats comes with npm, it run node packages without installing globally.

### package-lock.json, semantic versioning

- package-lock.json it is automatically generated file npm, that locks the exact version of all installed dependencies.

- sementic versioning is a system for versioning software and that uses the format like MAJOR.MINOR.BUG
  it helps developers to understand the nature of changes in new version. for example in fixing thes that 1.0.1, adding new feature 1.1.0, if we have a new changes or something updated in the code we change the version like 2.0.0.

### Running scripts via npx without global install

- npx is tools which provide by npm, and run package only one time, it runs nodejs packages withount installing globaly on the system, for example using npx to install package like npx create-react-app it installed the package temporarely.

**Sample**

> Check a real package.json and identify devDependencies.
> Run a package using npx.

{
"name": "my-project", // it defined project name
"version": "1.0.0", // it show the node version
"scripts": {
"start": "node index.js", // it is main server file or entry poin
"lint": "eslint ."
},
"dependencies": {  
 "express": "^4.18.2" // it is global package which added globaly in dependcies, which required for production
},
"devDependencies": {  
 "eslint": "^8.30.0", // this temporarly pockage which install for development purpose
"nodemon": "^2.0.22"
}
}

<!-- =============================================================================================== -->

# 3. Express.js & HTTP Handling

### What is middleware in Express? How does it work?

- middlewares in Express, middleware access the req, res, next() object, it is a function that runs before the final route send a response, it is used for tasks like parsing Json data, error handler, checking authentication, logging, every request goes throgh middleware one by one, and then we use next() function to pass the next step.

ex : app.use((req, res, next)=> {
let url = req.url
console.log(url)
next() // pass to the next steps
})

### Difference between app.use() and app.get()?

- app.use(), is used to register a middleware for all routes or specific route and all http request method,
- app.get(), is used to defined the route handler, that response only GET request method.

### How do you handle 404 errors in Express?

- In express, we protect routes using middlewares, it helps to check whether a user is authenticated, or has the right permissionn before accessing to a routes, for example we create a middleware to check if the user has valid token, if not, then we return 401 unauthorized error.

## Concepts to Cover

### Middleware chaining

- Middleware chaining in express it means, using multple middleware function that runs one after another before sending a response, each middleware does a specific task like logging, authentication, validation, so we use
  next() function to pass control from one middleware to another middleware.

for Ex:
1 : function logger(req,res,next){
console.log("Request Method", req.method)
next()
}

2: function checkAuthentication(req,res,next){
const token = req.headers.authorization;

if(!token){
return res.status(401).json({error : "Unauthorized"})
}
next() // it pass to next route
}

app.get('/api', logger, checkAuthentication, (req,res)=>{
res.send("user profile accessed")
})

### Route definition and HTTP methods

- routes define the path which link to a specific function, and http methods define the what action to be performed, like get method for fetching the data, post for creating data, put/patch for updating data, delete for remvoing data, so both works together and it help server to handle different types of client request
  for example :
  app.get('/users', getAllUsers) getting all users data
  app.post('/user', createUserData) creating a new user data
  app.put('/user/:id', updateUserData) it will update data by ID,
  app.patch('/user/:id', updateEmail) it also updatate the specific data
  app.delete('/user/:id', deleteUser) it will delete the data from the database

### Error-handling middleware

- Error handling middlware in the express it is special function that has 4 parameters like (err, req,res, next)
  that we can place in the end of the all the routes, it is global middleware, if something wrong in the application like missing user, database connection failed, so we can place next(err) funciton in the controller in the catch block using this next function it will pass the error to the error handler middleware, and pass the error to client without crushing the application. for example

app.use((err,req,res, next)=>{

console.log("Error", err.message)

return res.status(err.status || 500).json({success : false, message : err.message || "server error issue"})

})

### Auth middleware logic

- Auth middleware checks if the user has valid token, for example using the jwt, if user has a valid token, so the user is allowed to aacess the protected routes if not, it will gives an unauthorize error , because user does not have valid token.

### Session management, cookies, JWT tokens

- session management : seesion management it mean when user visit the website and login, then the server create the session with unique ID, and it store in the browser using the cookies, when user want to login in the future it wiil check by the server and logging without giving information because server already created unique ID.

- cookie : cookies is a small data which store in the browser send by the server, it is mostly used for storing the sessionID or token, for example when user login server send a cookie to the browser and it store in the browser cookie, and every request browser send cookie back to the server to know which user is making a request.

- jwt : it is token based authentication system, after login the server create signed in token and send to the client , this token is store in the browser either localstorage or cookies, and every request, client send the token and server verifies the user idientity and it doenst required store data in the server.
  in the token consiste 3 parts like headers, payload , signiture
  header- constain the algorithem,
  payload = contain the user info,
  signature = it is used to verify the token is secure.

### **Sample**

### Code a middleware that checks for a query param. Explain the order of middleware execution.

//1: it will log for every request
app.use((err, req,res,next)=>{
console.log('middleware 1')
next();
})

2: middleware check for apikey query param, this will check for api key using query param
app.use((req,res,next)=>{

const apiKey = req.query.apiKey;

if(!apiKey || apiKey !== '123'){
return res.status(404).json({message : "api key is missing"})
}

console.log('apikey' , apiKey)
next()

})

app.get('/', (req,res)=>{
res.send('welcome you pasas all middleware funciton')
})

so first middlware log the all request and then it will pass to next middleware,
and second middlware, if pass the api key properly it will through to next middlware if api key invalid so it will throw error and does not pass to next controller.

<!-- =============================================================================================== -->

## 4. API & RESTful Design

### Questions:

### What makes an API RESTful?

- RESTful api stand for Representational State Transfer, and it follow the REST principle which means using the proper HTTP methods , writing clear resouce based urls , and sending and recieving data in the json format
  like used proper http methods is : GET POST PUT/PATCH DELETE like
  GET : app.get(), POST : app.post(), PUT : app.put(), PATCH : app.patch, DELETE : app.detete()
  and writing proper clear and resource base url like "/users", "/users/:id",
  and send data and recieved data in the json format like
  res.status(200).json({status : true, message : users}), this make RESTful API.

### How to handle GET, POST, DELETE in Express?

- to handle proper http request using the rest principle like using proper methods and routes like

  > get all the users
  > app.get('/users', (req,res)=>{
  > res.status(200).json({message : "Get all users data"})
  > })

  > create a new data using the post method and also add the middleware to parse the json bady.
  > app.use(express.json())
  > app.post("/users", (req,res)=>{
  > const user = req.body;
  > res.status(201).json({message : "User data created", data : user})
  > })

  > delete the user data using the parameter
  > app.delete('/users/:id", (req,res)=>{
  > let id = req.params.id;
  > res.status(200).json({message : `user with {id} deleted`})
  > })

### How to parse request bodies?

- to parse the request bodies using middleware,
  like when client sent the data in json format so it used app.use(express.json()) middleware,
  and when client sent the data using form-data so it used app.express(express.urlencoded({exptended : true}))
  so this will parse the bodies.

### How to send custom status codes?

- send the custome status code using the .status() method before sending the data
  like
  res.status(200) for successfull request
  res.status(201) for data created
  res.status(400) for client error, bad request from client
  res.status(404) for data not found, or when data is missing
  res.status(500) for server issues

## Concepts to Cover:

### REST principles (Statelessness, Resources, Verbs)

- REST stands for Representational state transfer, and it follow the few principles that makes restfull api like
- Statelessness : so every request from the client contains the all information that sever needs to process,
  because server doenst store the client data between the request.

- Resources : so everything in rest treated as resource for example get users, products, orders and each request identified by the url like using the routes like /users , /products, /orders this resource make meangfull to identify th urls

- Verbs : rest uses the standard http methods like get post put patch delete make restful api like ,

### Body parsers: express.json()

- whent client sent the data as json format so it uses the middleware to parse the json body like app.use(express.jsone()) and if client sent the form so it uses the middleware like app.use(express.urlencoded({extended : true}))
  and it need to add this middleware to parse the json request

### res.status().json() patterns

- using this pattern it return clear, structured api responses to handle proper status to the results and send the json data, to understand the both frontend and backend to handle the response.

### ### Sample

> Write a RESTful POST route for creating a user.
> Create a custom error response in JSON.

app.post('/users', (req,res)=>{
try{
let users = req.body;

if(typeof users !== 'string'){
res.status(400).json({message : "required string"})
}

// if data is send properly
res.status(201).json({status : true, message : "data created", data : users})

}catch(error){
res.status(500).json({message : error.message})
}
})

<!-- ###################################################################################################### -->

## 5. Testing & CI/CD

### What is the difference between unit and integration tests?:

- both are used for testing purposes,
  so the unit testing test the individuals function in isolation, it doent need any external dependencies.
  where integration testing test the components which work togater and test the parts like test database, test api, so on.

so for example unit testing, it does not touch the database or api
test("calculate the 2 value ", ()=>{
expect(calculateValue(10, 20)).toBe(30)
})

and another example of integration testing
test("get the data of uses and return 200 status code", async ()=>{
const res = await request(app).get('/users')
expect(res.status).toBe(200)
expect(res.body.message).toBe("getting user data result")
})

### What role does CI/CD play in backend engineering?

- CI/CD stands for Continuous Integration and Continious Deployment, and it is very important role in backend engineering, because it helps to automate the test, builds application, deployement backend code quickly

- CI: so whenever a developer pass the new code then CI automatically run all the test, check the syntacs , and build the application,

- CD: and when all test are pass so CD automatically deploy on the production server, and also reduces the errors.

### How do you write a test case for an Express route using Jest?

- to test an express route with jest, it usually uses the supertest library, which allows to make http request in the express app,

so I create the express server using const app = express() and the create a post methoda to add a new data like I want to create name which is
const {name} = req.body;
if(typeof name !== "string") return res.status(400).json({message : "name is required, should be string"})
res.status(201).json({message : "Name data created"}) and then export the app server,

- create a test file like api.test.js that is the filename so first require the library of supetest then require the app server

const request = require('supertest);
const app = require('../app')

describe("POST api/", ()=>{

it("should create a new name", async ()=>{
const res = await request(app).post("/name").send({name : "John"})

expect(res.status).toBe(201)
expect(res.body.message).toEqual("name is created")
})

it("should return error if data show error and return 400 code", async ()=>{
const res = await request(app).post('/name').send({})
expect(res.status).toBe(400)
expect(res.body.error).toEqaul('name is requried')
})

})

## Concepts to Cover:

### Writing unit tests with Jest

function add(a, b){
return a + b
}

describe("add(): calculate the value", ()=>{

expect(add(3,5)).toBe(8)
expect(add(10, -3)).toBe(7)
})

### Setting up CI pipelines with GitHub Actions or similar

- CI - stands for Continuous Integration, which mean using the github actions to automate the development workflows, using github actions and setup the workflow in the directory like .github/worksflows/ci.yml so in this directory we automate files and runs on every pull and push request to the main branch and also follows, check the code run the test and install the dependencies using npm install,

### test coverage report

- test coverage reports it means to understand the how much code is tested, using the tool like jest to generate test reports, it used the --coverage flag with jest like jest --coverage, it will give all the full test reports, it shows in the table like "percentage of statement","branch","functions", "lines" it covered by the test, so it will showing the all tast reporst in the table format

### Write a Jest test case that mocks a service and tests an API response. Describe a good CI pipeline in 3 steps.

> not able to do it

<!-- =================================================================================================== -->

## 6. Databases: SQL, NoSQL & Schema Design

### When would you use SQL vs NoSQL?

- SQL: sql is a relational database that store data in structured format like rows and columns, and it best for when data has relationships or fixed schema, like banking transaction, e-commerce order, inventory system which have fixed schema, where consistency is important.
- No-SQL : no-sql is non-relational database, that store data in flexible format like json, key-value pairs, documents, it best for when unstructured or frequently changing data such as chat messages, social media posts, comments, where especially real time application.
- I use sql database when I need structured, consistent with defined relationships.
- I use no-sql database when I need flexibility , scalibility for fast-changing or large-scale data.
- sometimes I used both together in project based on different feature requiments.

### Why do we use allowNull, unique?

- allowNull and unique both are used to defined contraints in database schema.
  where allowNulll by default value is true which means the is optional and when set the allowNull : false it means the field is mandatory, where user cannot pass the empty value. for example email field is mandatory, password is mandatory.

and unique : true constaint define the value cannot be duplicate by default the unique value if false which mean user can duplicate the value like name, so most of user name is same.

### What are associations and joins in SQL?

- Assocatiations : association defined the relationship between two tables in database,
  for example : a user tabel and a order table can be associated, it means user can place many orders, so defined the relationship like one-to-many relationship, and we have 3 type of relationship
  1: one-to-one relationship, like user has one profile
  2: one-to-many relationship, like user has many orders
  3: many-to-many relationship, like student can take many courses, and course can have many students
  so this we have defined the assocationas

- Join : join are used to fetch the related data from multiple table based on assocationas
  for ex. I used sequelize orm to join the two table using foreignKey like user model and order model it the sequelize provide the foreignKey based on the model, like user model and foreign key is userId and order foreignKey is orderId, so this way defined the joins tabel

## Concepts to Cover:

### PostgreSQL vs MongoDB

- so difference between PostgreSQL vs MongoDB is
- PostgreSQL: is Relational Database Management System (RDMS) that uses SQL and has fixed schema with supported complex joins, foreignKeys, contrains, acid transactions, its best when data relationaships and consistency is complex like banking application, enterprices app.

- MongoDB : it is no-sql database that store data in flexible document based format like JSON like objects, and it iss schema-less database. it best for fast development and unstructured data, like social medias post, comments. or like real time applications.

### Schema constraints, normalization

- Schema consttaints it means applying the rules when creating table so it cannot pass the wrog value and prevent from duplication when data inserted so
  NOT NULL means it is mandatory data, user must fill the filed
  PRIMARY KEY : means provide uniqueId to row
  FOREIGN KEY : used to link to another table
  UNIQUE : it prevent from duplication
  DEFAULT : if no data pass so default value will taken

- Normalization : normalization means spliting data into smaller parts so it removes duplicate data and also save memory so it could be clean and consistent data which easier to manage
  for example :
- unnormalized data
  studentID Name course1 course2
  1 raj math english

- normalized data
  studentID Name
  1 raj

- course tabel
  courseid courseName
  101 math
  102 english

### One-to-Many, Many-to-Many relationships

- One-to-Many : in one-to-many relationship, on record in a table can related to multiple records in another table, which means, we have 2 two table one is user table and second is order table, so user can place many orders, but order table links only a single user. this is the one-to-many relationship

- many-to-many : it means records from both table can be related to multiple records in third table,
  for ex. so we have 3 table first 2 table is student table and second table is courses and third table is joinTable which join the student and course table, it means student can take multple courses, and courses have many students. this is handle by third join table, so its called many-to-many relationship.

### Write a query joining two tables. Design a schema with a users and orders table.

// USER TABLE
const User = sequelize.define("user",{
name : DataTypes.STRING,
email : DataTypes.STRING
})

// ORDER TABLE
const Order = sequelize.define("order", {
productName : {
  type : DataTypes.STRING,
  allowNull : false,
  required : true
},
productType : {
   type : DataTypes.STRING,
  allowNull : false,
  required : true
}

})

User.belongsToMany(Order, {through : UserOrder})
Order.belongsToMany(User, {through : UserOrder})

const UserOrder = sequelize.define("userorder", {
  userId : {
    type : DataTypes.INTEGER,
    reference : "users",
    key : "id"
  },
  orderId : {
    type : DataTypes.INTEGER,
    reference : "orders",
    key : "id"
  }
})

<!-- ================================================================================================ -->

### 7. Microservices & Axios Communication

## What are Axios instances? How do they help?
-  an axios is a javascript library, it is used to make http request like GET POST, and an axios-Instance is pre-configured version of axios where defined common settings like baseURL, headers, timeout, and it helps to avoid repeating code in every request and it keep clean, consistent and easy to manage, where multiple endpoints share the same configuration

const axios = require('axios')
const axiosInstance = axios.create({
  baseURL : "https://www.example-api.com",
  timeout : 5000,
  headers : {
    "Authorization" : "Bearer token"
  }
}) 

const response = axiosInstance.get("/users")
  .then((res)=>{
    console.log(res)
  })
  .catch((error)=>{
    console.log(error)
  })


### How do services talk to each other in a microservice setup?
- in microservices setup, each services are separated and independently works, this means they dont access each other database directly, instead of they communicate over the networks
there are two way to handle microservices over the networks 1: synchronous communication and 2: asyn communication
so sync-communication usually use REST api to communicate, for ex. service A send a request to service B and it wait for response, ever if we use async/await in code, because if we communicate over the networks it still itself behave like sync communication because service A wait for a response and depends on service B's reply to continue.
- where we can make it async communication using a message broker tools like rabitmq, kafka, it means service A send a message to queue, and service B processes it later, the sender doenst wait for response, which make it faster, and scalable
- so we cause both microservices communication either REST api or message broker, it depend on needs.



### How to handle failure between services?
- In a microservices setup, failures can happen due to network issues, service downtime, or timeouts. To handle this, we follow several strategies:

Retries: If a service fails temporarily, we retry the request a few times before failing completely.

Timeouts: We set time limits for how long a service waits for a response, to avoid hanging.

Circuit Breaker: If a service keeps failing, the circuit breaker stops sending requests temporarily to prevent overloading and allows it to recover.

Fallbacks: If a service is down, we provide a default response or cached data to keep the system working.

Message Queues (like RabbitMQ/Kafka): For non-blocking, asynchronous communication, we send messages to queues so services don’t have to wait for immediate responses

### Axios with baseURL, interceptors
- so using a axios instance we create baseURL so we can use anywhere without repeating same url, 
  and interceptors used in axios it works as a middleware function to handle request response for example 
  request interceptors is used to attach a thing like token(jwt) to before sending a request and response interceptors is used to handle the global errors or responses. 
> FOR EX:
this will help to avoid repeating the base url and we can use axion instance any where
const axiosInstance = axios.create({
  baseURL : "http://www.google-api.com",
  headers : {}
  timeout : 5000
})

// request interceptors : it will help to get token before send request
axiosIntence.request.interceptor.use((response)=>{
  let token = "token-data"
  response.headers.Authorization(`Bearer ${token})
  return response;
})

// response interceptors : it helps to handle global errors and also handle the unauthrorization 401 error
axiosInstance.interceptors.response.use((response)=> response, (err)=> 
if(error.response.status === 401){
  console.log("Errors:", error)
}
return Promise.reject(err)
)

### HTTP APIs between services
- in microservices archetechture, each service is separate and independently works on itw own environment, where both services dont access the data directly, instead of they communication over the network using HTTP API's, usually we use REST.
for ex: service A send a request to service B to access there data, but it take time to send a response because over the newtowrk behaves like synchronous communication. so it take time to send response.
and also handle the errors is service issue or netowrk issue, or service downtime.


### Retry logic and fallback strategies
- in microservices, services communicate over the network, if one service is failed to respnose due to network issues, service downtime, timeout, we use retry logic to use retry the request again after short delay.
- if retry logic still failed so we use fallback strategy, is means providing default value or alternative response so the system still work without crushing the application.


## **Sample**
> Show how to create an Axios instance and use it.
Diagram a 2-service communication scenario.

const axios = require('axios')
const axiosInstance = axios.create({
  baseURL : "http://www.service-B-api",
  timeout : 5000,
  headers : {
    Content-Type : "application/json"
  }
})

// request interceptors, attach token
axiosInstance.interceptors.request.use((config)=>{
  const token = "lksdfjal"
  config.headers.Authorization = (`Bearer ${token}`)
  return confing;
}, (err)=> Promise.reject(err));

// response inceptors handle global error
axiosInstance.interceptors.response.use(()=>{
  return response;
} , (err)=>{
  if(error.response || error.response.status === 401){
    console.log("Error authorization, redirecting to login")
  }
  return Promise.reject(err)
})

module.exports = axiosInstance;

+-------------------+                    +--------------------+
|   Service A       |  ---> HTTP GET --->|    Service B       |
| (uses Axios)      |                    | (has /users route) |
|                   |<---  JSON Resp  ---|                    |
+-------------------+                    +--------------------+

👉 Service A uses Axios Instance:
   - Adds token with interceptor
   - Handles errors globally


## 8. Real-time Systems with Socket.io

### How is WebSocket different from REST?
- REST (Representational State Transfer) is a request-response based protocol that works over HTTP. In REST, the client initiates every communication, and the server only responds — there is no real-time communication unless the client keeps polling (repeatedly asking the server for updates).

On the other hand, WebSocket is a full-duplex communication protocol that allows both client and server to send messages anytime after the initial handshake. It works over a single persistent connection, making it ideal for real-time applications like chat apps, live games, stock price updates, etc.

> REST stands for Representational state Transfer, means it is one way communcation model, which means client send a request and wait for response, and server process the request and send to back to client, it is stateless, because it doesnt store previous data, and every request is independent
app.get("/user", (req,res)=> console.log(res.url))
> Where Websocket is two way (bidirectional) communication, when connection is established both can send and receive message any time, without getting delay,
socket.io('message', (data)=> console.log(data))

### How do you broadcast messages in Socket.io?
- in Socket.io, broadcast means sending message to multiple connected client, except once who sent the message, and we can use this broadcast system where want live update, in a chat app, , in the notification
so we use this like socket.broadcast.emit("message", data)
- and we can also broadcast in another way using io.emit("message", data)
- and also we can broadcast message in room or in a specific room like using
io.to(room1).emit("message, data)

### How do you identify users and rooms?
- in socket.io we can identify user by authentication like tokens, userID, username, we can get this authentication using a method like socket.handshake.query.userId, so this way we can identify the users
methoda like
for ex : const userID = socket.handshake.query.userID.

- we can identify the rooms by unique roomId, 

### Connection lifecycle in Socket.io
- In socket.io, the connection life cylcle, it is series of events that happen when client connection to a server until the discconects 
for example : setup the connection and into the connection I write the custom events, and then client receive the event from which comes from server, and also receie the message from the client suing emit, and if client disconnect or close the browser or 


// create connection
io.on("connection", (socket)=>{

// join room 
socket.on("joinRoom", (roomId)=>{
  socket.join(roomId)
  console.log("user join a room", roomId.id)
})

// send message to client
socket.on("message", (data)=>{
  io.on(data.roomId).emit('message received', data.text)
})

// disconnects
socket.on("disconnect", (reason)=>{
  console.log("user disconnects", socket.id, "Room", reason)
})

})

### socket.on, socket.emit, socket.to(room)
> socket.on() : listening a event. || socket.on(event, callback) 
- is used to listen for a specific event from the client. and when the event received then callback will executed
- when client emitted the event then the socket.on which is server will listen the event using socket.on

for ex: socket.on("message", (data)=>{
  console.log("received from client:", data)
})

> socket.emit() : sending event to a specific socket socket.emit(eventname, data), we can send a custome event to a specific connected clients.
for example I we send sent custom message to client 
socket.emit("message", "welcome from the server")

> socket.to(room).emit(eventName, data) :
- it is used to send a message to all users in room, except the sender, it is commonly used in chat groupt message to nofity the users.
for example :  
socket.to(room).emti(eventName, "message data")


### Session vs Room management
> Session : in socket.io, it is a individuals connection between client and the server, and each client has the unique session id so we can identify the users who are connected or not connected, we can identity this during the connection life-cycle
for example 
- io.on("connection", (socket)=>{
  console.log("a user connected", socket.id)

  // create a connction or emitted the event which goes from server to client
  socket.emit("message","server send this data")
})

> Room Management : so room management in socket.io it allows to groupina a multiple client together in roomName, so message can be broadcast to every client in the room except the sender 
for example 
socket.join("room11")

socket.to("room11").emit("messageChat", "hello everyone")