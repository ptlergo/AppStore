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
    title: 'app1',
    description: 'first app',
    releaseDate: '1/1/1991',
  },
  {
    id: 2,
    title: 'app2',
    description: '2nd app',
    releaseDate: '1/1/1991',
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
  releaseDate: "1/1/1991"
}
```

###/api/v1/users
######Display All Users Info
```
{

}
```

###/api/v1/users/:id
######Display Single User Info
```
{

}
```

##RUN
*Default port is '3000' [http://localhost:3000](http://localhost:3000)*

```
node src/server.js
```
