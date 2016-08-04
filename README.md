#App Store
App Store API using RESTful architecture.

##INSTALL
*Install all package dependencies*
```
npm install
```

##ENDPOINTS
*All Users, and Apps routes.*

###/api/v1/apps
######Display All Apps Info
```
[
  {
    id: 1,
    title: "app1",
    description: "first app",
    releaseDate: "2016-08-04T16:52:49+00:00",
  },
  {
    id: 2,
    title: "app2",
    description: "2nd app",
    releaseDate: "2016-08-04T16:52:49+00:00",
  }
]
```

###/api/v1/apps/:id
######Display Single App Info
```
{
  id: 1,
  title: "app1",
  description: "first app",
  releaseDate: "2016-08-04T16:52:49+00:00"
}
```

###/api/v1/users
######Display All Users Info
```
[
  {
    id: 1,
    name: "user1",
  },
  {
    id: 2,
    name: "user2",
  }
]
```

###/api/v1/users/:id
######Display Single User Info
```
{
  id: 1,
  name: "user1",
}
```

##RUN
*Default port is '3000' [http://localhost:3000](http://localhost:3000)*

```
node src/server.js
```
