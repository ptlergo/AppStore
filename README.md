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

###Routes for apps

| HTTP VERB | URL | DESCRIPTION | RESPONSE |
|---|---|---|---|
|GET|/api/v1/apps|Get all apps|[{ id: 1, title: "app1", description: "first app", releaseDate: "2016-08-04T16:52:49+00:00", }, { id: 2, title: "app2", description: "2nd app", releaseDate: "2016-08-04T16:52:49+00:00", }]|
|GET|/api/v1/apps/:id|Get a single app|{ id: 1, title: "app1", description: "first app", releaseDate: "2016-08-04T16:52:49+00:00" }|
|GET|/api/v1/users/:id/apps|Get all apps from a single user||
|POST|/api/v1/apps/|Create an app||
|POST|/api/v1/apps/:id|Update an app||
|DELETE|/api/v1/apps/:id|Delete an app||

###Routes for users

| HTTP VERB | URL | DESCRIPTION | RESPONSE |
|---|---|---|---|
|GET|/api/v1/users|Get all users|[{ id: 1, name: "user1", age: "18"}, { id: 2, name: "user2", age: "50", }]|
|GET|/api/v1/users/:id|Get a single user|{ id: 1, name: "user1", age: "18", }|
|POST|/api/v1/users/|Create a user||
|POST|/api/v1/users/:id|Update a user||
|DELETE|/api/v1/users/:id|Delete a user||

###Routes for art assets

| HTTP VERB | URL | DESCRIPTION | RESPONSE |
|---|---|---|---|
|GET|/api/v1/arts/|Get all art assets|[{ id: 1, title: "art1", srcLink: "http://i.imgur.com/5e5Ihb6.jpg", }, { id: 2, title: "art2", srcLink: "http://i.imgur.com/QQ3O6PO.jpg", }]|
|GET|/api/v1/arts/:id|Get a single art asset|{ id: 1, title: "art1", srcLink: "http://i.imgur.com/5e5Ihb6.jpg", }|
|POST|/api/v1/arts/|Create an art asset||
|POST|/api/v1/arts/:id|Update an art asset||
|DELETE|/api/v1/arts/:id|Delete an art asset||

##DATABASE
```
mysql.server start
```

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
