---
id: verify-auth
title: Authenticate
---

##
```POST``` Authenticate

```
https://admin.barikoi.xyz:8090/auth/login
```

This API should be used to authenticate a user. Requried paramters are `email` and `password`.After a successfull request, api will return the JWT token in the response.

## API PARAMS

| Parameter     | Value                  | Action         |
| ------------- |:-------------:         | -------------  |
| email         | demo@barikoi.com       | Required       |
| password      | ********               | Required       |
