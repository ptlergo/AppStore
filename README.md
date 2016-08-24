[ ![Codeship Status for ptlergo/AppStore](https://codeship.com/projects/dcb4c540-4a48-0134-cac2-7683f1944f86/status?branch=master)](https://codeship.com/projects/169629)
#App Store
App Store API using RESTful architecture

##INSTALL
Install all package dependencies
```
npm install
```

install mocha globally
```
npm i -g mocha
```

install gulp globally
```
npm i -g gulp
```

install yargs globally
```
npm i -g yargs
```

##ENDPOINTS
All Users, Apps, and Art Assets routes.

###App Routes

| HTTP VERB | URL | DESCRIPTION | SAMPLE RESPONSE |
|---|---|---|---|
|GET|/api/v1/apps|Get all apps|[{"id":2,"title":"Direct Research Producer","description":"logistical","releaseDate":"(899) 823-0205","createdAt":"2016-08-09T23:47:48.000Z","updatedAt":"2016-08-09T23:51:17.000Z","appId":2},{"id":3,"title":"Central Research Technician","description":"optimizing","releaseDate":"(044) 770-8148","createdAt":"2016-08-09T23:47:52.000Z","updatedAt":"2016-08-09T23:47:52.000Z","appId":null},{"id":4,"title":"Forward Markets Planner","description":"neutral","releaseDate":"(502) 984-9532","createdAt":"2016-08-09T23:47:55.000Z","updatedAt":"2016-08-09T23:53:34.000Z","appId":2},{"id":5,"title":"Senior Response Analyst","description":"web-enabled","releaseDate":"129.959.8257","createdAt":"2016-08-09T23:47:58.000Z","updatedAt":"2016-08-09T23:47:59.000Z","appId":null},{"id":6,"title":"Regional Interactions Orchestrator","description":"background","releaseDate":"1-302-109-3446 x869","createdAt":"2016-08-09T23:48:03.000Z","updatedAt":"2016-08-09T23:48:03.000Z","appId":null}]|
|GET|/api/v1/apps/:id|Get a single app|{"id":2,"title":"Direct Research Producer","description":"logistical","releaseDate":"(899) 823-0205","createdAt":"2016-08-09T23:47:48.000Z","updatedAt":"2016-08-09T23:51:17.000Z","appId":2,"artassets":[{"id":0,"title":"24031","srcLink":"http://lorempixel.com/640/480", "createdAt":"2016-08-09T23:46:28.000Z","updatedAt":"2016-08-09T23:50:16.000Z","appArtId":2}]}|
|GET|/api/v1/users/:id/apps|Get all apps from a single user|[{"id":2,"title":"Direct Research Producer","description":"logistical","releaseDate":"(899) 823-0205","createdAt":"2016-08-09T23:47:48.000Z","updatedAt":"2016-08-09T23:51:17.000Z","appId":2,"artassets":[{"id":0,"title":"24031","srcLink":"http://lorempixel.com/640/480", "createdAt":"2016-08-09T23:46:28.000Z","updatedAt":"2016-08-09T23:50:16.000Z","appArtId":2}]},{"id":4,"title":"Forward Markets Planner","description":"neutral","releaseDate":"(502) 984-9532","createdAt":"2016-08-09T23:47:55.000Z","updatedAt":"2016-08-09T23:53:34.000Z","appId":2,"artassets":[]}]|
|POST|/api/v1/apps/|Create an app|1|
|POST|/api/v1/apps/:id|Update an app|1|
|DELETE|/api/v1/apps/:id|Delete an app|1|

###Users Routes

| HTTP VERB | URL | DESCRIPTION | SAMPLE RESPONSE |
|---|---|---|---|
|GET|/api/v1/users|Get all users|[[{"id":2,"name":"Xavier Greenholt","age":26290,"createdAt":"2016-08-09T23:47:49.000Z","updatedAt":"2016-08-09T23:47:49.000Z"},{"id":3,"name":"Patsy Witting","age":92096,"createdAt":"2016-08-09T23:47:52.000Z","updatedAt":"2016-08-09T23:47:52.000Z"},{"id":4,"name":"Kylie Smitham","age":71034,"createdAt":"2016-08-09T23:47:55.000Z","updatedAt":"2016-08-09T23:47:55.000Z"},{"id":5,"name":"Zora Nienow","age":97830,"createdAt":"2016-08-09T23:47:59.000Z","updatedAt":"2016-08-09T23:47:59.000Z"},{"id":6,"name":"Ambrose Green","age":31495,"createdAt":"2016-08-09T23:48:04.000Z","updatedAt":"2016-08-09T23:48:04.000Z"}]|
|GET|/api/v1/users/:id|Get a single user|{"id":2,"name":"Xavier Greenholt","age":26290,"createdAt":"2016-08-09T23:47:49.000Z","updatedAt":"2016-08-09T23:47:49.000Z","apps":[{"id":2,"title":"Direct Research Producer","description":"logistical","releaseDate":"(899) 823-0205","createdAt":"2016-08-09T23:47:48.000Z","updatedAt":"2016-08-09T23:51:17.000Z","appId":2,"artassets":[{"id":0,"title":"24031","srcLink":"http://lorempixel.com/640/480", "createdAt":"2016-08-09T23:46:28.000Z","updatedAt":"2016-08-09T23:50:16.000Z","appArtId":2}]},{"id":4,"title":"Forward Markets Planner","description":"neutral","releaseDate":"(502) 984-9532","createdAt":"2016-08-09T23:47:55.000Z","updatedAt":"2016-08-09T23:53:34.000Z","appId":2,"artassets":[]}]}|
|POST|/api/v1/users/|Create a user|1|
|POST|/api/v1/users/:id|Update a user|1|
|DELETE|/api/v1/users/:id|Delete a user|1|

###Art Assets Routes

| HTTP VERB | URL | DESCRIPTION | SAMPLE RESPONSE |
|---|---|---|---|
|GET|/api/v1/artassets/|Get all art assets|[{"id":0,"title":"24031","srcLink":"http://lorempixel.com/640/480",  "createdAt":"2016-08-09T23:46:28.000Z","updatedAt":"2016-08-09T23:50:16.000Z","appArtId":2},{"id":2,"title":"10416","srcLink":"http://lorempixel.com/640/480", "createdAt":"2016-08-09T23:47:49.000Z","updatedAt":"2016-08-09T23:47:49.000Z","appArtId":null},{"id":3,"title":"1107","srcLink":"http://lorempixel.com/640/480","createdAt":"2016-08-09T23:47:52.000Z","updatedAt":"2016-08-09T23:47:52.000Z","appArtId":null},{"id":4,"title":"86668","srcLink":"http://lorempixel.com/640/480", "createdAt":"2016-08-09T23:47:55.000Z","updatedAt":"2016-08-09T23:47:55.000Z","appArtId":null},{"id":5,"title":"11670","srcLink":"http://lorempixel.com/640/480", "createdAt":"2016-08-09T23:47:59.000Z","updatedAt":"2016-08-09T23:47:59.000Z","appArtId":null}]|
|GET|/api/v1/artassets/:id|Get a single art asset|{"id":2,"title":"10416","srcLink":"http://lorempixel.com/640/480", "createdAt":"2016-08-09T23:47:49.000Z","updatedAt":"2016-08-09T23:47:49.000Z","appArtId":null}|
|POST|/api/v1/artassets/|Create an art asset|1|
|POST|/api/v1/artassets/:id|Update an art asset|1|
|DELETE|/api/v1/artassets/:id|Delete an art asset|1|

##DATABASE
mysql is our database and must be running
```
mysql.server start
```
Configure .env file for database
*Sample Environment Variables in .env file*
```
DB_NAME=DatabaseSample
DB_USER=user
DB_PASS=password
DB_HOST=localhost
DB_SCHEMA=mysql
DB_PORT=0000

```

##RUN SERVER
Default port is '3000' [http://localhost:3000](http://localhost:3000)

```
node src/server.js
```

##USAGE
Turn debug mode on
```
DEBUG=true node src/server.js
```

###[lincoln-logs](https://github.com/ptlergo/lincoln-logs) debug tool
require the tool in file to use
```javascript
const util = require('lincoln-logs');
```

[lincoln-logs](https://github.com/ptlergo/lincoln-logs) accepts an object with two keys: 'msg', 'info'.
```javascript
util.debug({ msg: 'debug message', info: value });
```

*sample debug mode output of reading user '3' route*
```
[ 2016-08-22T17:39:52.594Z ]
[ USER MODEL: find user with id:]
 3
[  ✔ finished successfully ✔  ]


[ 2016-08-22T17:39:52.594Z ]
[ READ ONE USER ROUTE SUCCESS: ]
 { id: 3,
 name: 'Patsy Witting',
 age: 92096,
 createdAt: 2016-08-09T23:47:52.000Z,
 updatedAt: 2016-08-09T23:47:52.000Z,
 apps: [] }
[  ✔ finished successfully ✔  ]
```

##UNIT TESTING
Run [Mocha](https://mochajs.org/) unit tests to test all API functions

*there must be at least one proper user, app, and art asset object in database*
```
npm test
```
*Run unit tests with debug mode on*
```
DEBUG=true npm test
```
##WORKFLOW
setup feature branch
1. create a branch
```
git checkout <branchname> -b
```

2. pull and merge master branch to new branch. Fix any merge conflicts
```
git pull origin master
```

3. Push to new branch to update with code from master
```
git push origin <branchname>
```

##GULP TASKS
commands built with gulp to expedite development process
