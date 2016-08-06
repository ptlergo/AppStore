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

POST /api/v1/users
Create a User
GET /api/v1/users
Display all Users
GET /api/v1/users/:id
Display User based upon id
POST /api/v1/users/:id
Update User based upon id
DELETE  /api/v1/users/:id
Delete User based upon id

##ENDPOINTS
*All Users, and Apps routes.*

###Routes for apps

| METHOD | URL | RESPONSE |
|---|---|---|---|
|GET|/api/v1/apps|[{ id: 1, title: "app1", description: "first app", releaseDate: "2016-08-04T16:52:49+00:00", }, { id: 2, title: "app2", description: "2nd app", releaseDate: "2016-08-04T16:52:49+00:00", }]|
|GET|/api/v1/apps/:id|{ id: 1, title: "app1", description: "first app", releaseDate: "2016-08-04T16:52:49+00:00" }|
|POST|/api/v1/apps/||
|POST|/api/v1/apps/:id||
|DELETE|/api/v1/apps/:id||

###Routes for users

| METHOD | URL | RESPONSE |
|---|---|---|---|
|GET|/api/v1/users|[{ id: 1, name: "user1", age: "18"}, { id: 2, name: "user2", age: "50", }]|
|GET|/api/v1/users/:id|{ id: 1, name: "user1", age: "18", }|
|POST|/api/v1/users/||
|POST|/api/v1/users/:id||
|DELETE|/api/v1/users/:id||

###Routes for art assets

| METHOD | URL | RESPONSE |
|---|---|---|---|
|GET|/api/v1/arts/|[{ id: 1, title: "art1", srcLink: "http://i.imgur.com/5e5Ihb6.jpg", }, { id: 2, title: "art2", srcLink: "http://i.imgur.com/QQ3O6PO.jpg", }]|
|GET|/api/v1/arts/:id|{ id: 1, title: "art1", srcLink: "http://i.imgur.com/5e5Ihb6.jpg", }|
|POST|/api/v1/arts/||
|POST|/api/v1/arts/:id||
|DELETE|/api/v1/arts/:id||

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
