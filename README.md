#App Store
App Store API using RESTful architecture.

##INSTALL
*Install all package dependencies*
```
npm install
```

*install all command line tools*
```
npm i -g mocha
```

##ENDPOINTS
*All Users, and Apps routes.*

| METHOD | URL | RESPONSE |
|---|---|---|---|
|GET|/api/v1/apps|[{ id: 1, title: "app1", description: "first app", releaseDate: "2016-08-04T16:52:49+00:00", }, { id: 2, title: "app2", description: "2nd app", releaseDate: "2016-08-04T16:52:49+00:00", }]|
|GET|/api/v1/apps/:id|{ id: 1, title: "app1", description: "first app", releaseDate: "2016-08-04T16:52:49+00:00" }|
|GET|/api/v1/users|[{ id: 1, name: "user1", age: "18"}, { id: 2, name: "user2", age: "50", }]|
|GET|/api/v1/users/:id|{ id: 1, name: "user1", age: "18", }|

##RUN SERVER
*Default port is '3000' [http://localhost:3000](http://localhost:3000)*

```
node src/server.js
```

##RUN UNIT TESTS
*run unit tests to test API functions*
```
mocha
```
