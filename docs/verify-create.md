---
id: verify-create
title: Create Application
---

##
```POST``` Create Application

```
https://admin.barikoi.xyz:8090/request/verification
```

For the verification request,
Requireds parameters are:

## API PARAMS

| Parameter          | Value                              | Action         |
| -------------      |:-------------:                     | -------------  |
| name               | Tanjed Atono	                      | Required       |
| application_id     | SU-3110202004	                  | Required       |
| application_type   | 3                                  | Required       |
| home_address       | House 115, Road 1, Block F, Banani, Dhaka | Required        |
| home_place_name    | Bhai Bhai Store	                  | Required       |
| home_mobile        | 01629535307                        | Required       |

After a successful request, api will respond with the application id as `id` and the application number as `application_id`.


## Example Response

```
{
  "message": "Application requested successfully",
  "application": {
    "id": 263,
    "application_id": "SU-3110202002"
  },
  "status": 200
}
```