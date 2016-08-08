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

| HTTP VERB | URL | DESCRIPTION | SAMPLE RESPONSE |
|---|---|---|---|
|GET|/api/v1/apps|Get all apps|[{ id: 1, title: "app1", description: "first app", releaseDate: "2016-08-04T16:52:49+00:00", }, { id: 2, title: "app2", description: "2nd app", releaseDate: "2016-08-04T16:52:49+00:00", }]|
|GET|/api/v1/apps/:id|Get a single app|{ id: 1, title: "app1", description: "first app", releaseDate: "2016-08-04T16:52:49+00:00" }|
|GET|/api/v1/users/:appid/apps|Get all apps from a single user|{"id":1,"title":"Pat","description":"description of app","releaseDate":"july first","createdAt":"2016-08-08T03:23:25.000Z","updatedAt":"2016-08-08T03:23:25.000Z","users":[{"id":1,"name":"Pat","age":12,"createdAt":"2016-08-08T03:22:27.000Z","updatedAt":"2016-08-08T03:22:27.000Z","appId":1},{"id":2,"name":"Yuoo","age":16,"createdAt":"2016-08-08T03:24:32.000Z","updatedAt":"2016-08-08T03:24:32.000Z","appId":1}]}|
|POST|/api/v1/apps/|Create an app|1|
|POST|/api/v1/apps/:id|Update an app|1|
|DELETE|/api/v1/apps/:id|Delete an app|1|

###Routes for users

| HTTP VERB | URL | DESCRIPTION | SAMPLE RESPONSE |
|---|---|---|---|
|GET|/api/v1/users|Get all users|[{ id: 1, name: "user1", age: "18"}, { id: 2, name: "user2", age: "50", }]|
|GET|/api/v1/users/:id|Get a single user|{ id: 1, name: "user1", age: "18", }|
|POST|/api/v1/users/|Create a user|1|
|POST|/api/v1/users/:id|Update a user|1|
|DELETE|/api/v1/users/:id|Delete a user|1|

###Routes for art assets

| HTTP VERB | URL | DESCRIPTION | SAMPLE RESPONSE |
|---|---|---|---|
|GET|/api/v1/arts/|Get all art assets|[{ id: 1, title: "art1", srcLink: "http://i.imgur.com/5e5Ihb6.jpg", }, { id: 2, title: "art2", srcLink: "http://i.imgur.com/QQ3O6PO.jpg", }]|
|GET|/api/v1/arts/:id|Get a single art asset|{ id: 1, title: "art1", srcLink: "http://i.imgur.com/5e5Ihb6.jpg", }|
|POST|/api/v1/arts/|Create an art asset|1|
|POST|/api/v1/arts/:id|Update an art asset|1|
|DELETE|/api/v1/arts/:id|Delete an art asset|1|

##DATABASE
```
mysql.server start
```
*Sample Environmental Variables in .env*
```
DB_NAME=DatabaseSample
DB_USER=user
DB_PASS=password
DB_HOST=localhost
DB_SCHEMA=mysql
DB_PORT=0000

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
